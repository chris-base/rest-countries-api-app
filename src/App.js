import { useState } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import SearchComponent from "./Components/SearchComponent";
import FilterComponent from "./Components/FilterComponent";
import CountriesContainerComponent from "./Components/CountriesContainerComponent";

function App() {
  const [countryObject, setCountryObject] = useState(null);
  const [searchText, setSearchText] = useState("");

  let jsonArray = [];
  const allCountries = [];

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    });
    const json = await response.json();

    jsonArray = await json;

    allCountries[0] = json[0];

    console.log("---------------MAKING API CALL---------------");

    alphabetizeCountries(1);
  };

  const alphabetizeCountries = (cObjIndex) => {
    // console.log(jsonArray[cObjIndex]["ccn3"]);

    for (let i = 0; i < allCountries.length; i++) {
      if (jsonArray[cObjIndex]["ccn3"] < allCountries[i]["ccn3"]) {
        allCountries.splice(i, 0, jsonArray[cObjIndex]);
        break;
      } else if (i === allCountries.length - 1) {
        allCountries.push(jsonArray[cObjIndex]);
        break;
      }
    }

    if (cObjIndex < jsonArray.length - 1) {
      alphabetizeCountries(cObjIndex + 1);
    } else {
      setCountryObject(allCountries);
    }
  };

  if (!countryObject) {
    fetchCountries();
  } else {
    console.log(countryObject);
  }

  return (
    <div className='App'>
      <HeaderComponent />

      <div id='mainAppContaner'>
        <div id='searchFilterContainer'>
          <SearchComponent searchText={searchText} setSearchText={setSearchText} />

          <FilterComponent />
        </div>

        {countryObject ? <CountriesContainerComponent countryObject={countryObject} /> : <></>}
      </div>
    </div>
  );
}

export default App;
