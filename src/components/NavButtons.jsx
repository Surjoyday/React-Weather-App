function NavButtons() {
  const cities = [
    { id: 1, cityName: "Munich" },
    { id: 3, cityName: "Tokyo" },
    { id: 2, cityName: "Sydney" },
    { id: 4, cityName: "Stockholm" },
    { id: 5, cityName: "Dublin" },
  ];
  return (
    <div className="flex items-center justify-around">
      {cities.map((city) => (
        <button
          className="text-lg font-semibold hover:bg-gray-700/50 p-1.5 rounded-md transition ease-in cursor-pointer"
          key={city.id}
        >
          {city.cityName}
        </button>
      ))}
    </div>
  );
}

export default NavButtons;
