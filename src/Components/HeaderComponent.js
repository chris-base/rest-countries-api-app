import "../Styles/HeaderStyles.css";
import iconMoon from "./images/icon-moon.svg";

const HeaderComponent = () => {
  return (
    <div id='appHeaderContainer'>
      <p id='headerText'>Where in the world?</p>

      <div id='darkLightContainer'>
        <div id='darkLightIcon' style={{ backgroundImage: "url(" + iconMoon + ")" }} />
        <p id='darkLightText'>Dark Mode</p>
      </div>
    </div>
  );
};

export default HeaderComponent;
