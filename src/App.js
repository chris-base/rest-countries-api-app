import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import SearchComponent from "./Components/SearchComponent";
import FilterComponent from "./Components/FilterComponent";
import CountriesContainerComponent from "./Components/CountriesContainerComponent";

function App() {
  return (
    <div className='App'>
      <HeaderComponent />

      <div id='mainAppContaner'>
        <div id='searchFilterContainer'>
          <SearchComponent />

          <FilterComponent />
        </div>

        <CountriesContainerComponent />
      </div>
    </div>
  );
}

export default App;
