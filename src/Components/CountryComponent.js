import "../Styles/CountryStyles.css";

const CountryComponent = ({ countryInfo, setCurrCountry, index }) => {
  return (
    <div id='countryComponentContainer' onClick={() => setCurrCountry(index)}>
      <div id='countryFlagImage' style={{ backgroundImage: "url(" + countryInfo.flags.svg + ")" }} />

      <div id='countryInfoContainer'>
        <p id='countryInfoName'>{countryInfo.name.common}</p>

        <div className='countryInfoSectionContainer'>
          <p className='countryInfoBoldText'>Population:</p>
          <p className='countryInfoText'>{countryInfo.population.toLocaleString()}</p>
        </div>

        <div className='countryInfoSectionContainer'>
          <p className='countryInfoBoldText'>Region:</p>
          <p className='countryInfoText'>{countryInfo.region}</p>
        </div>

        <div className='countryInfoSectionContainer'>
          <p className='countryInfoBoldText'>Capital:</p>
          <p className='countryInfoText'>{countryInfo.capital}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryComponent;
