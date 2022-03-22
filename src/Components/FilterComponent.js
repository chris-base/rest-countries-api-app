import "../Styles/FilterStyles.css";
import iconDropLight from "./images/icon-drop-light.svg";
import iconDropDark from "./images/icon-drop-dark.svg";

const FilterComponent = () => {
  return (
    <div id='filterContainer'>
      <p id='filterText'>Filter by Region</p>

      <div id='filterDropButton' style={{ backgroundImage: "url( " + iconDropLight + ")" }} />
    </div>
  );
};

export default FilterComponent;
