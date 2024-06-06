import { TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import { useEffect, useRef, useState } from "react";

function SearchFields({ onSearch, onHandleUnits, onLocationClick }) {
  const [inputValue, setInputValue] = useState("");
  const textFieldRef = useRef(null);

  const handleInputChange = (e) => {
    console.log(e);
    setInputValue(e.target.value);
    console.log(e.target.value);
    console.log(e.key);
  };

  return (
    <div className="flex justify-evenly flex-wrap max-sm:text-sm">
      <div className="flex items-center justify-around gap-6 my-6">
        <TextField
          placeholder="search by cities....."
          variant="standard"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          inputRef={textFieldRef}
          InputProps={{
            style: {
              color: "white",
            },
            classes: {
              input: {
                "&::placeholder": {
                  color: "white",
                },
              },
            },
          }}
        />
        <div className="flex gap-5">
          <SearchRoundedIcon
            fontSize="medium"
            className="text-white hover:scale-125 cursor-pointer transition ease-in-out"
            onClick={() => {
              textFieldRef.current.focus();
              if (inputValue) {
                onSearch(inputValue);
                textFieldRef.current.blur();
              }
            }}
          />
          <MyLocationRoundedIcon
            fontSize="medium"
            className="text-white hover:scale-125 cursor-pointer transition ease-in-out"
            onClick={onLocationClick}
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-.5">
        <button
          className="text-lg font-medium hover:scale-110 transition ease-in-out"
          onClick={() => {
            onHandleUnits("metric");
          }}
        >
          ℃
        </button>
        <span className="text-lg">&#65372;</span>
        <button
          className="text-lg font-medium hover:scale-110 transition ease-in-out"
          onClick={() => {
            onHandleUnits("imperial");
          }}
        >
          ℉
        </button>
      </div>
    </div>
  );
}

export default SearchFields;
