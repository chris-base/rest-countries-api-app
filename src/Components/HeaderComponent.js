import "../Styles/HeaderStyles.css";
import iconMoonLight from "./images/icon-moon-light.svg";
import iconMoonDark from "./images/icon-moon-dark.svg";

const HeaderComponent = ({ darkLightMode, setDarkLightMode }) => {
  return (
    <div id='appHeader' style={darkLightMode ? { backgroundColor: "#2b3945" } : { backgroundColor: "white" }}>
      <div id='headerContainer'>
        <p id='headerText' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
          Where in the world?
        </p>

        <div id='darkLightContainer' onClick={() => setDarkLightMode(!darkLightMode)}>
          <div
            id='darkLightIcon'
            style={darkLightMode ? { backgroundImage: "url(" + iconMoonDark + ")" } : { backgroundImage: "url(" + iconMoonLight + ")" }}
          />
          <p id='darkLightText' style={darkLightMode ? { color: "white" } : { color: "#111517" }}>
            Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
