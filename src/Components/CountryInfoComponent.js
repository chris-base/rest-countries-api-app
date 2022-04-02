import "../Styles/CountryInfoStyles.css";
import iconBackLight from "./images/icon-back-light.svg";
import iconBackDark from "./images/icon-back-dark.svg";

const CountryInfoComponent = ({ setCurrCountry, currCountry, countryObject, darkLightMode }) => {
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
          style={darkLightMode ? { backgroundColor: "#2b3945", color: "white" } : { backgroundColor: "white", color: "#111517" }}
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
      <div
        id='infoBackButton'
        onClick={() => setCurrCountry(-1)}
        style={darkLightMode ? { backgroundColor: "#2b3945" } : { backgroundColor: "white" }}
      >
        <div
          id='backButtonImg'
          style={darkLightMode ? { backgroundImage: "url(" + iconBackDark + ")" } : { backgroundImage: "url(" + iconBackLight + ")" }}
        />
        <p id='backButtonText' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
          Back
        </p>
      </div>

      <div id='countryInfoContainerSpecial'>
        <div id='countryInfoFlag' style={{ backgroundImage: "url(" + currCountry.flags.svg + ")" }} />

        <div id='countryInfoEntireContainer'>
          <p id='countryInfoMainText' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
            {currCountry.name.common}
          </p>

          <div id='countryInfoMainInfo'>
            <div id='countryInfoSectionOne'>
              <div className='infoContainer'>
                <p className='infoTextBold' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  Native Name:
                </p>
                <p className='infoTextNormal' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  {currCountry.name.common}
                </p>
              </div>

              <div className='infoContainer'>
                <p className='infoTextBold' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  Population:
                </p>
                <p className='infoTextNormal' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  {currCountry.population ? currCountry.population.toLocaleString() : "N/A"}
                </p>
              </div>

              <div className='infoContainer'>
                <p className='infoTextBold' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  Region:
                </p>
                <p className='infoTextNormal' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  {currCountry.region ? currCountry.region : "N/A"}
                </p>
              </div>

              <div className='infoContainer'>
                <p className='infoTextBold' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  Sub Region:
                </p>
                <p
                  className='infoTextNormal'
                  style={darkLightMode ? { color: "white", whiteSpace: "nowrap" } : { color: "#111517", whiteSpace: "nowrap" }}
                >
                  {currCountry.subregion ? currCountry.subregion : "N/A"}
                </p>
              </div>

              <div className='infoContainer'>
                <p className='infoTextBold' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  Capital:
                </p>
                <p className='infoTextNormal' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  {currCountry.capital ? currCountry.capital : "N/A"}
                </p>
              </div>
            </div>

            <div id='countryInfoSectionTwo'>
              <div className='infoContainer'>
                <p className='infoTextBold' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  Top Level Domain:
                </p>
                <p className='infoTextNormal' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  {currCountry.tld ? currCountry.tld : "N/A"}
                </p>
              </div>

              <div className='infoContainer'>
                <p className='infoTextBold' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  Currencies:
                </p>
                <p className='infoTextNormal' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  {currCountry.currencies
                    ? Object.keys(currCountry.currencies).map((currency, index) => {
                        return index === 0 ? currCountry.currencies[currency].name : ", " + currCountry.currencies[currency].name;
                      })
                    : "N/A"}
                </p>
              </div>

              <div className='infoContainer'>
                <p className='infoTextBold' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  Languages:
                </p>
                <p className='infoTextNormal' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  {currCountry.languages ? reformatLanguanges() : "N/A"}
                </p>
              </div>
            </div>
          </div>

          <div id='countryBorderContainer'>
            <p id='countryBorderText' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
              Border Countries:
            </p>

            <div id='countryBorders'>
              {currCountry.borders ? (
                createCountryBordersArray()
              ) : (
                <p id='borderNoneText' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
                  None
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfoComponent;
