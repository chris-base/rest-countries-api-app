import { useState, useRef, useEffect } from "react";
import "../Styles/FilterStyles.css";
import iconDropLight from "./images/icon-drop-light.svg";
import iconDropDark from "./images/icon-drop-dark.svg";

const FilterComponent = ({ filterRegion, setFilterRegion }) => {
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
        <p id='filterText'>{filterRegion === "" ? "Filter by Region" : filterRegion}</p>

        <div id='filterDropButton' style={{ backgroundImage: "url( " + iconDropLight + ")" }} />
      </div>

      {filterOpen ? (
        <div id='filterExpandedContainer'>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("");
              setFilterOpen(false);
            }}
          >
            All
          </p>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("Africa");
              setFilterOpen(false);
            }}
          >
            Africa
          </p>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("Americas");
              setFilterOpen(false);
            }}
          >
            Americas
          </p>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("Asia");
              setFilterOpen(false);
            }}
          >
            Asia
          </p>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("Europe");
              setFilterOpen(false);
            }}
          >
            Europe
          </p>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("Oceania");
              setFilterOpen(false);
            }}
          >
            Oceania
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterComponent;
