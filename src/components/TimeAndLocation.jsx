import { dateTime, formatAMPM, localTime } from "../assets/helper";

function TimeAndLocation() {
  return (
    <>
      <div className="flex items-center justify-center text-xl font-extralight my-6">
        <p>{dateTime(new Date())}</p>
        <p>&#65372;</p>
        <p>Local Time: {localTime()}</p>
      </div>
      <div className="flex justify-center items-center my-4">
        <p className="text-xl font-medium">Berlin, DE XXXX</p>
      </div>
    </>
  );
}

export default TimeAndLocation;
