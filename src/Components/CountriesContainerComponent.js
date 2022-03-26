import "../Styles/CountriesContainerStyles.css";
import CountryComponent from "./CountryComponent";

const CountriesContainerComponent = ({ countryObject }) => {
  return (
    <div id='mainCountriesContainerComponent'>
      {countryObject ? (
        <div id='countriesGridContainer' style={{ gridTemplateColumns: "auto auto auto" }}>
          {[...countryObject].map((country, index) => {
            return <CountryComponent countryInfo={country} key={index} />;
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CountriesContainerComponent;
