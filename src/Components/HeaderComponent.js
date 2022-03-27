import "../Styles/HeaderStyles.css";
import iconMoonLight from "./images/icon-moon-light.svg";
import iconMoonDark from "./images/icon-moon-dark.svg";

const HeaderComponent = () => {
  return (
    <div id='appHeader'>
      <div id='headerContainer'>
        <p id='headerText'>Where in the world?</p>

        <div id='darkLightContainer'>
          <div id='darkLightIcon' style={{ backgroundImage: "url(" + iconMoonLight + ")" }} />
          <p id='darkLightText'>Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
