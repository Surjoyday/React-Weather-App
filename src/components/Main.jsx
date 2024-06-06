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

  useEffect(function () {
    async function fetchWeatherData(searchParams) {
      try {
        const dataOfWeather = await getWeatherData("weather", {
          q: "guwahati",
        });
        setWeatherData(formatWeatherData(dataOfWeather));

        const dataOfForecast = await getForecastData("forecast", {
          lat: formatWeatherData(dataOfWeather).lat,
          lon: formatWeatherData(dataOfWeather).lon,
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
  }, []);
  return (
    <div className="w-8/12 h-3/4">
      <NavButtons />
      {/* <div className="flex justify-around bg-gray-700 bg-opacity-70"> */}
      <div className="mt-2 bg-blue-300 rounded-md">
        <SearchFields />
        <TimeAndLocation weatherData={weatherData} />
        <TempAndDetails weatherData={weatherData} />
        <Forecast
          title={"3 hour step forecast"}
          forecastData={forecastData.hourlyData}
        />
        <Forecast
          title={"Daily forecast"}
          forecastData={forecastData.dailyData}
        />
      </div>
    </div>
  );
}

export default Main;
