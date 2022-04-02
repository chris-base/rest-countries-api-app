import "../Styles/CountryStyles.css";

const CountryComponent = ({ countryInfo, setCurrCountry, index, darkLightMode }) => {
  return (
    <div
      id='countryComponentContainer'
      onClick={() => setCurrCountry(index)}
      style={darkLightMode ? { backgroundColor: "#2b3945" } : { backgroundColor: "white" }}
    >
      <div id='countryFlagImage' style={{ backgroundImage: "url(" + countryInfo.flags.svg + ")" }} />

      <div id='countryInfoContainer'>
        <p id='countryInfoName' style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}>
          {countryInfo.name.common}
        </p>

        <div className='countryInfoSectionContainer'>
          <p className='countryInfoBoldText' style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}>
            Population:
          </p>
          <p className='countryInfoText' style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}>
            {countryInfo.population.toLocaleString()}
          </p>
        </div>

        <div className='countryInfoSectionContainer'>
          <p className='countryInfoBoldText' style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}>
            Region:
          </p>
          <p className='countryInfoText' style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}>
            {countryInfo.region}
          </p>
        </div>

        <div className='countryInfoSectionContainer'>
          <p className='countryInfoBoldText' style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}>
            Capital:
          </p>
          <p className='countryInfoText' style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}>
            {countryInfo.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryComponent;
