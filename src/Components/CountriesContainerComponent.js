import { useState } from "react";
import "../Styles/CountriesContainerStyles.css";
import CountryComponent from "./CountryComponent";

const CountriesContainerComponent = () => {
  const [flagUrl, setFlagUrl] = useState(null);

  const fetchAdvice = async () => {
    const response = await fetch("https://restcountries.com/v3.1/name/MEX", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
      // body: JSON.stringify({}),
    });
    const json = await response.json();
    console.log(await json[0]["flags"]["svg"]);
    setFlagUrl(await json[0]["flags"]["svg"]);
  };

  if (!flagUrl) {
    fetchAdvice();
  }

  return (
    <div id='mainCountriesContainerComponent'>
      <CountryComponent flagUrl={flagUrl} />
    </div>
  );
};

export default CountriesContainerComponent;
