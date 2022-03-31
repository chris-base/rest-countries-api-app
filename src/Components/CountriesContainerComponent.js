import { useEffect, useState } from "react";
import "../Styles/CountriesContainerStyles.css";
import CountryComponent from "./CountryComponent";

const CountriesContainerComponent = ({ countryObject, setCurrCountry, searchText }) => {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  const updateColumnAmountBySize = () => {
    if (clientWidth < 685) {
      return { gridTemplateColumns: "auto" };
    } else if (clientWidth < 1000) {
      return { gridTemplateColumns: "auto auto" };
    } else if (clientWidth < 1450) {
      return { gridTemplateColumns: "auto auto auto" };
    } else {
      return { gridTemplateColumns: "auto auto auto auto" };
    }
  };

  useEffect(() => {
    const resizeWindow = () => setClientWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindow);
  });

  return (
    <div id='mainCountriesContainerComponent'>
      {countryObject ? (
        <div id='countriesGridContainer' style={updateColumnAmountBySize()}>
          {[...countryObject].map((country, index) => {
            return country.name.common.toLowerCase().includes(searchText) ? (
              <CountryComponent countryInfo={country} setCurrCountry={setCurrCountry} index={index} key={index} />
            ) : (
              <></>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CountriesContainerComponent;
