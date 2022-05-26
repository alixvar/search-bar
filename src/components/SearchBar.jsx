import Search from "@mui/icons-material/Search";
import Close from "@mui/icons-material/Close";
import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [wordEntered, setWordEntered] = useState();

  // -------> Function That Filter The Data <--------
  const handleFilter = (event) => {
    const word = event.target.value;
    setInputValue(word);
    setWordEntered(word);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(word.toLowerCase());
    });
    word === "" ? setFilteredData([]) : setFilteredData(newFilter);
  };

  // -------> Function That Remove The Search Bar Texts <--------
  const handleRemove = () => {
    setWordEntered("");
    setFilteredData([]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col bg-slate-300 h-screen items-center ">
      <div>
        <div className="mt-10 flex bg-white h-fit w-[400px]">
          <input
            type="text"
            placeholder={placeholder}
            className="outline-none flex-1 h-8 p-5 rounded-sm shadow-md py-6"
            onChange={handleFilter}
            value={wordEntered}
          />
          <div className="flex items-center px-4 shadow-md">
            {inputValue === "" ? (
              <Search />
            ) : (
              <Close className="cursor-pointer" onClick={handleRemove} />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResault bg-white w-[340px] overflow-hidden overflow-y-auto h-fit max-h-[200px] shadow-md mt-2 transition-all">
            {filteredData.map((value, key) => {
              return (
                <a href={value.link} target="_blank" rel="noreferrer" key={key}>
                  <p className=" py-3 px-3 hover:bg-slate-200 transition-all">
                    {value.title}
                  </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
export default SearchBar;