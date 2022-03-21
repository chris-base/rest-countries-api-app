import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import SearchComponent from "./Components/SearchComponent";
import FilterComponent from "./Components/FilterComponent";

function App() {
  return (
    <div className='App'>
      <HeaderComponent />

      <div id='mainAppContaner'>
        <div id='searchFilterContainer'>
          <SearchComponent />

          <FilterComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
