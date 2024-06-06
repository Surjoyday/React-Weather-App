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
  const [searchedQuerry, setSerachedQuerry] = useState({ q: "guwahati" });
  const [units, setUnits] = useState({ units: "metric" });

  function handleSearch(input) {
    setSerachedQuerry({ q: input });
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
            units: "metric",
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
    <div className="w-8/12 h-3/4">
      <NavButtons onSearch={handleSearch} />
      <div className="py-6 mt-2 bg-black bg-opacity-40 rounded-md text-white">
        <SearchFields />
        {weatherData && (
          <>
            <TimeAndLocation weatherData={weatherData} />
            <TempAndDetails weatherData={weatherData} />
          </>
        )}
        {forecastData && (
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
