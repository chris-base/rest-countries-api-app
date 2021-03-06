import { useState } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import SearchComponent from "./Components/SearchComponent";
import FilterComponent from "./Components/FilterComponent";
import CountriesContainerComponent from "./Components/CountriesContainerComponent";
import CountryInfoComponent from "./Components/CountryInfoComponent";

function App() {
  const [countryObject, setCountryObject] = useState(null);
  const [darkLightMode, setDarkLightMode] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [currCountry, setCurrCountry] = useState(-1);

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
    <div className='App' style={darkLightMode ? { backgroundColor: "#202c37" } : { backgroundColor: "white" }}>
      <HeaderComponent darkLightMode={darkLightMode} setDarkLightMode={setDarkLightMode} />

      {currCountry === -1 ? (
        <div className='mainAppContaner'>
          <div id='searchFilterContainer'>
            <SearchComponent searchText={searchText} setSearchText={setSearchText} darkLightMode={darkLightMode} />

            <FilterComponent filterRegion={filterRegion} setFilterRegion={setFilterRegion} darkLightMode={darkLightMode} />
          </div>

          {countryObject ? (
            <CountriesContainerComponent
              countryObject={countryObject}
              setCurrCountry={setCurrCountry}
              searchText={searchText}
              filterRegion={filterRegion}
              darkLightMode={darkLightMode}
            />
          ) : (
            <></>
          )}
        </div>
      ) : countryObject ? (
        <div className='mainAppContaner'>
          <CountryInfoComponent
            setCurrCountry={setCurrCountry}
            currCountry={countryObject[currCountry]}
            countryObject={countryObject}
            darkLightMode={darkLightMode}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
