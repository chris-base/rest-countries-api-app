import "../Styles/CountryInfoStyles.css";
import iconBackLight from "./images/icon-back-light.svg";

const CountryInfoComponent = ({ setCurrCountry, currCountry, countryObject }) => {
  const reformatLanguanges = () => {
    let langOutput = "";

    for (let i = Object.keys(currCountry.languages).length - 1; i >= 0; i--) {
      langOutput +=
        i > 0 ? currCountry.languages[Object.keys(currCountry.languages)[i]] + ", " : currCountry.languages[Object.keys(currCountry.languages)[i]];
    }

    return langOutput;
  };

  const createCountryBordersArray = () => {
    const shortenedBorders = [...currCountry.borders];
    const tempBordersArray = [];
    const output = [];

    for (let i = 0; i < countryObject.length; i++) {
      for (let j = 0; j < shortenedBorders.length; j++) {
        if (countryObject[i].cca3 === shortenedBorders[j]) {
          tempBordersArray.push([countryObject[i].name.common, i, countryObject[i].cca3]);
        }
      }

      if (tempBordersArray.length === shortenedBorders.length) {
        break;
      }
    }

    for (let i = 0; i < tempBordersArray.length; i++) {
      output.push(
        <p
          className='borderButton'
          onClick={() => {
            setCurrCountry(tempBordersArray[i][1]);
          }}
          key={i}
        >
          {tempBordersArray[i][0]}
        </p>
      );
    }

    console.log("Logging Borders");

    return output;
  };

  return (
    <div id='mainCountryInfoComponent'>
      <div id='infoBackButton' onClick={() => setCurrCountry(-1)}>
        <div id='backButtonImg' style={{ backgroundImage: "url(" + iconBackLight + ")" }} />
        <p id='backButtonText'>Back</p>
      </div>

      <div id='countryInfoContainerSpecial'>
        <div id='countryInfoFlag' style={{ backgroundImage: "url(" + currCountry.flags.svg + ")" }} />

        <div id='countryInfoEntireContainer'>
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
                <p className='infoTextNormal' style={{ whiteSpace: "nowrap" }}>
                  {currCountry.subregion}
                </p>
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
                <p className='infoTextNormal'>{reformatLanguanges()}</p>
              </div>
            </div>
          </div>

          <div id='countryBorderContainer'>
            <p id='countryBorderText'>Border Countries:</p>

            <div id='countryBorders'>{currCountry.borders ? createCountryBordersArray() : <></>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfoComponent;
