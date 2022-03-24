import { useState, useRef, useEffect } from "react";
import "../Styles/FilterStyles.css";
import iconDropLight from "./images/icon-drop-light.svg";
import iconDropDark from "./images/icon-drop-dark.svg";

const FilterComponent = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setFilterOpen(false);
    }
  };

  return (
    <div id='filterContainer' ref={wrapperRef}>
      <div id='filterUnexpandedContainer' onClick={() => setFilterOpen(!filterOpen)}>
        <p id='filterText'>Filter by Region</p>

        <div id='filterDropButton' style={{ backgroundImage: "url( " + iconDropLight + ")" }} />
      </div>

      {filterOpen ? (
        <div id='filterExpandedContainer'>
          <p className='filterText'>Africa</p>
          <p className='filterText'>America</p>
          <p className='filterText'>Asia</p>
          <p className='filterText'>Europe</p>
          <p className='filterText'>Oceania</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterComponent;
