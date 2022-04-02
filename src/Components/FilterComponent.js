import { useState, useRef, useEffect } from "react";
import "../Styles/FilterStyles.css";
import iconDropLight from "./images/icon-drop-light.svg";
import iconDropDark from "./images/icon-drop-dark.svg";

const FilterComponent = ({ filterRegion, setFilterRegion, darkLightMode }) => {
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
      <div
        id='filterUnexpandedContainer'
        onClick={() => setFilterOpen(!filterOpen)}
        style={darkLightMode ? { backgroundColor: "#2b3945" } : { backgroundColor: "white" }}
      >
        <p id='filterText' style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}>
          {filterRegion === "" ? "Filter by Region" : filterRegion}
        </p>

        <div
          id='filterDropButton'
          style={darkLightMode ? { backgroundImage: "url( " + iconDropDark + ")" } : { backgroundImage: "url( " + iconDropLight + ")" }}
        />
      </div>

      {filterOpen ? (
        <div id='filterExpandedContainer' style={darkLightMode ? { backgroundColor: "#2b3945" } : { backgroundColor: "white" }}>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("");
              setFilterOpen(false);
            }}
            style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}
          >
            All
          </p>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("Africa");
              setFilterOpen(false);
            }}
            style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}
          >
            Africa
          </p>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("Americas");
              setFilterOpen(false);
            }}
            style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}
          >
            Americas
          </p>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("Asia");
              setFilterOpen(false);
            }}
            style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}
          >
            Asia
          </p>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("Europe");
              setFilterOpen(false);
            }}
            style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}
          >
            Europe
          </p>
          <p
            className='filterText'
            onClick={() => {
              setFilterRegion("Oceania");
              setFilterOpen(false);
            }}
            style={darkLightMode ? { color: "#ffffff" } : { color: "#111517" }}
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
