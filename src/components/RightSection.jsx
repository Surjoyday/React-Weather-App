import Search from "./Search";

function RightSection() {
  return (
    <div className="bg-gray-900 bg-opacity-80 h-3/4 w-3/12 rounded-tr-md rounded-br-md text-white">
      <div>
        <Search />
        <p className="text-3xl font-medium text-center">Haze</p>
        <hr className="w-9/12 mx-auto" />
      </div>
    </div>
  );
}

export default RightSection;
