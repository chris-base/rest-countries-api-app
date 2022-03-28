import "../Styles/CountryInfoStyles.css";
import iconBackLight from "./images/icon-back-light.svg";

const CountryInfoComponent = ({ setCurrCountry, currCountry }) => {
  return (
    <div id='mainCountryInfoComponent'>
      <div id='infoBackButton' onClick={() => setCurrCountry(-1)}>
        <div id='backButtonImg' style={{ backgroundImage: "url(" + iconBackLight + ")" }} />
        <p id='backButtonText'>Back</p>
      </div>

      <div id='countryInfoContainer'>
        <div id='countryInfoFlag' style={{ backgroundImage: "url(" + currCountry.flags.svg + ")" }} />

        <p id='countryInfoMainText'>{currCountry.name.common}</p>

        <div id='countryInfoMainInfo'>
          <div id='countryInfoSectionOne'>
            <div className='infoContainer'>
              <p className='infoTextBold'>Native Name:</p>
              <p className='infoTextNormal'>{currCountry.name.common}</p>
            </div>

            <div className='infoContainer'>
              <p className='infoTextBold'>Population:</p>
              <p className='infoTextNormal'>{currCountry.population.toLocaleString()}</p>
            </div>

            <div className='infoContainer'>
              <p className='infoTextBold'>Region:</p>
              <p className='infoTextNormal'>{currCountry.region}</p>
            </div>

            <div className='infoContainer'>
              <p className='infoTextBold'>Sub Region:</p>
              <p className='infoTextNormal'>{currCountry.subregion}</p>
            </div>

            <div className='infoContainer'>
              <p className='infoTextBold'>Capital:</p>
              <p className='infoTextNormal'>{currCountry.capital}</p>
            </div>
          </div>

          <div id='countryInfoSectionTwo'>
            <div className='infoContainer'>
              <p className='infoTextBold'>Top Level Domain:</p>
              <p className='infoTextNormal'>{currCountry.tld}</p>
            </div>

            <div className='infoContainer'>
              <p className='infoTextBold'>Currencies:</p>
              <p className='infoTextNormal'>
                {Object.keys(currCountry.currencies).map((currency, index) => {
                  return index === 0 ? currCountry.currencies[currency].name : ", " + currCountry.currencies[currency].name;
                })}
              </p>
            </div>

            <div className='infoContainer'>
              <p className='infoTextBold'>Languages:</p>
              <p className='infoTextNormal'>
                {Object.keys(currCountry.languages).map((lang, index) => {
                  return index === 0 ? currCountry.languages[lang] : ", " + currCountry.languages[lang];
                })}
              </p>
            </div>
          </div>
        </div>

        <div id='countryBorderContainer'>
          <p id='countryBorderText'>Border Countries:</p>

          <div id='countryBorders'></div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfoComponent;
