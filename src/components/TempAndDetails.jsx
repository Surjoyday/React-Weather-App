import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Icon } from "@mui/material";
import { localTime } from "../assets/helper";

const verticalDetails = [
  {
    id: 1,
    Icon: FaThermometerEmpty,
    title: "Feels like",

    value: "0 ℃",
  },
  {
    id: 2,
    Icon: BiSolidDropletHalf,
    title: "Humidity",

    value: "0 %",
  },
  {
    id: 3,
    Icon: FiWind,
    title: "Wind",
    value: "0 km/h",
  },
];

const horizontalDetails = [
  {
    id: 1,
    Icon: GiSunrise,
    title: "Sunrise",
    value: localTime(),
  },
  {
    id: 2,
    Icon: GiSunset,
    title: "Sunset",
    value: localTime(),
  },
  {
    id: 3,
    Icon: MdKeyboardArrowUp,
    title: "High",
    value: "xx °",
  },
  {
    id: 4,
    Icon: MdKeyboardArrowDown,
    title: "Low",
    value: "xx °",
  },
];

function TempAndDetails({ weatherData }) {
  return (
    <>
      <p className="flex items-center justify-center">Rain</p>

      <div className="flex items-center justify-between px-6 mx-10">
        <img
          src={weatherData.icon}
          alt="current-weather-img"
          className="w-20"
        />

        <p className="text-2xl">XX ℃</p>

        <div className="flex flex-col gap-1">
          {verticalDetails.map((detailAbout) => (
            <div key={detailAbout.id} className="flex items-center gap-1">
              <detailAbout.Icon size={15} />
              <p className="text-sm">
                {detailAbout.title} :{" "}
                <span className="font-medium">{detailAbout.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-9 my-7">
        {horizontalDetails.map((detailAbout) => (
          <div key={detailAbout.id} className="flex">
            <detailAbout.Icon size={20} />
            <p className="pl-2 text-sm font-light">
              {detailAbout.title} : <span>{detailAbout.value}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TempAndDetails;
