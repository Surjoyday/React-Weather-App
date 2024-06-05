import { TextField } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { BiCurrentLocation } from "react-icons/bi";

function SearchFields() {
  return (
    <div className=" flex justify-evenly">
      <div className="flex justify-center items-center gap-4 my-6">
        <TextField
          placeholder="search by cities....."
          // variant="standard"
          fullWidth
        />
        <IoIosSearch
          size={25}
          className="text-white hover:scale-125 cursor-pointer transition ease-in-out"
        />
        <BiCurrentLocation
          size={25}
          className="text-white hover:scale-125 cursor-pointer transition ease-in-out"
        />
      </div>
      <div className="flex items-center justify-center gap-.5">
        <button className="text-lg font-medium hover:scale-110 transition ease-in-out">
          ℃
        </button>
        <span className="text-lg">&#65372;</span>
        <button className="text-lg font-medium hover:scale-110 transition ease-in-out">
          ℉
        </button>
      </div>
    </div>
  );
}

export default SearchFields;
