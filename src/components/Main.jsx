import NavButtons from "./NavButtons";
import TimeAndLocation from "./TimeAndLocation";
import SearchFields from "./SearchFields";
import TempAndDetails from "./TempAndDetails";
import Forecast from "./Forecast";
import { getForecastData, getWeatherData } from "../assets/api";
import { formatForecastData, formatWeatherData } from "../assets/helper";
import { useEffect, useState } from "react";

function Main() {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [searchedQuerry, setSerachedQuerry] = useState({});
  const [units, setUnits] = useState({ units: "metric" });

  console.log(weatherData);
  function handleSearch(input) {
    setSerachedQuerry({ q: input.toLowerCase() });
  }

  function handleUnits(value) {
    setUnits({ units: value });
  }

  function handleGeoLoaction() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((success) => {
        const { latitude, longitude } = success.coords;
        setSerachedQuerry({ lat: latitude, lon: longitude });
      });
    }
  }

  function handleBgColor() {
    if (Object.keys(weatherData).length === 0) {
      return "bg-black";
    }

    const threshold = units.units === "metric" ? 20 : 60;
    console.log(weatherData.temp);
    console.log(+weatherData.temp <= threshold);
    if (weatherData.temp <= threshold) return "bg-sky-700";

    return "bg-amber-600";
  }

  useEffect(
    function () {
      async function fetchWeatherData(searchParams) {
        try {
          const dataOfWeather = await getWeatherData("weather", {
            ...searchedQuerry,
            ...units,
          });
          setWeatherData(formatWeatherData(dataOfWeather));

          const dataOfForecast = await getForecastData("forecast", {
            lat: formatWeatherData(dataOfWeather).lat,
            lon: formatWeatherData(dataOfWeather).lon,
            ...units,
          });

          setForecastData(
            formatForecastData(
              formatWeatherData(dataOfWeather).dt,
              formatWeatherData(dataOfWeather).timezone,
              dataOfForecast.list
            )
          );
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
      fetchWeatherData();
    },
    [searchedQuerry, units]
  );
  return (
    <div
      className={`w-8/12 ${
        Object.keys(weatherData).length === 0 ? "h-screen" : ""
      } max-sm:w-full max-sm:p-2`}
    >
      <NavButtons onSearch={handleSearch} />

      <div
        className={`py-6 mt-2 ${handleBgColor()}  bg-opacity-40 rounded-md text-white`}
      >
        <SearchFields
          onSearch={handleSearch}
          onHandleUnits={handleUnits}
          onLocationClick={handleGeoLoaction}
        />
        {Object.keys(weatherData).length !== 0 && (
          <>
            <TimeAndLocation weatherData={weatherData} />
            <TempAndDetails weatherData={weatherData} units={units} />
          </>
        )}
        {Object.keys(forecastData).length !== 0 && (
          <>
            <Forecast
              title={"3 hour step forecast"}
              forecastData={forecastData.hourlyData}
            />
            <Forecast
              title={"Daily forecast"}
              forecastData={forecastData.dailyData}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
