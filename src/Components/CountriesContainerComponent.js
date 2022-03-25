import { useState } from "react";
import "../Styles/CountriesContainerStyles.css";
import CountryComponent from "./CountryComponent";

const CountriesContainerComponent = () => {
  const [countryObject, setCountryObject] = useState(null);

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

    alphabetizeCountries(1);
  };

  const alphabetizeCountries = (cObjIndex) => {
    console.log(jsonArray[cObjIndex]["ccn3"]);

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

  const makeRowOfCountries = () => {
    return <div />;
  };

  return (
    <div id='mainCountriesContainerComponent'>
      {/* <CountryComponent flagUrl={flagUrl} /> */}

      {countryObject ? <div>{makeRowOfCountries()}</div> : <></>}
    </div>
  );
};

export default CountriesContainerComponent;
