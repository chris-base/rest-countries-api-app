import "../Styles/CountryStyles.css";

const CountryComponent = ({ flagUrl }) => {
  let countryFlag;

  console.log(flagUrl);

  return (
    <div id='countryComponentContainer'>
      <div id='countryFlagImage' style={{ backgroundImage: "url(" + flagUrl + ")" }} />

      <div id='countryInfoContainer'>
        <p id='countryInfoName'>Mexico</p>

        <div className='countryInfoSectionContainer'>
          <p className='countryInfoBoldText'>Population:</p>
          <p className='countryInfoText'>334,000</p>
        </div>

        <div className='countryInfoSectionContainer'>
          <p className='countryInfoBoldText'>Region:</p>
          <p className='countryInfoText'>Americas</p>
        </div>

        <div className='countryInfoSectionContainer'>
          <p className='countryInfoBoldText'>Capital:</p>
          <p className='countryInfoText'>Mexico City</p>
        </div>
      </div>
    </div>
  );
};

export default CountryComponent;
