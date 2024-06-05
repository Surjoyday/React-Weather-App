import NavButtons from "./NavButtons";
import TimeAndLocation from "./TimeAndLocation";
import WeatherDetails from "./SearchFields";
import SearchFields from "./SearchFields";
import TempAndDetails from "./TempAndDetails";

function Main() {
  return (
    <div className="h-3/4 w-8/12">
      <NavButtons />
      {/* <div className="bg-gray-700 bg-opacity-70 flex justify-around"> */}
      <div className="bg-blue-300 rounded-md mt-2">
        <SearchFields />
        <TimeAndLocation />
        <TempAndDetails />
      </div>
    </div>
  );
}

export default Main;
