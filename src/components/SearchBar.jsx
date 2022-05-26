import Search from "@mui/icons-material/Search";
import Close from "@mui/icons-material/Close";
import { useState } from "react";
import "./SearchBar.css";
import GitHubIcon from "@mui/icons-material/GitHub";

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
      <h1 className="text-xl font-bold text-slate-500 mt-16">
        Book Search Bar
      </h1>
      <div className="w-[75%] max-w-[400px] lg:max-w-[400px] ">
        <div className="mt-10 flex bg-white h-fit">
          <input
            type="text"
            placeholder={placeholder}
            className="outline-none flex-1 rounded-sm shadow-md py-3 px-5"
            onChange={handleFilter}
            value={wordEntered}
          />
          <div className="flex items-center px-4 shadow-md">
            {inputValue === "" ? (
              <Search className="opacity-50" />
            ) : (
              <Close className="cursor-pointer" onClick={handleRemove} />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResault bg-white max-w-[340px] overflow-hidden overflow-y-auto h-fit max-h-[200px] shadow-md mt-2 transition-all">
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
      <div className="flex-col items-center p-2 absolute bottom-16 justify-center">
        <a
          href="https://github.com/alixvar/search-bar"
          target="_blank"
          rel="noreferrer"
          className=" w-full gap-2 flex items-center justify-center border p-1 rounded-md hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all "
        >
          <GitHubIcon fontSize="large" /> <span>Github Link</span>
        </a>
        <p className="mt-2 text-sm">Made By Ali Sadeghy</p>
      </div>
    </div>
  );
}
export default SearchBar;
