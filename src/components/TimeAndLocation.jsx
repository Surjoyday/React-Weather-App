function TimeAndLocation({ weatherData }) {
  return (
    <>
      <div className="flex items-center justify-center my-6 text-xl font-extralight">
        <p>{weatherData.formatedLocalTime}</p>
      </div>
      <div className="flex items-center justify-center my-4">
        <p className="text-xl font-medium">
          {weatherData.name}, {weatherData.country}
        </p>
      </div>
    </>
  );
}

export default TimeAndLocation;
