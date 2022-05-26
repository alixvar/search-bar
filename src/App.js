import SearchBar from "./components/SearchBar";
import Data from "./data.json";

function App() {
  return (
    <div>
      <SearchBar placeholder="Search..." data={Data} />
    </div>
  );
}

export default App;
