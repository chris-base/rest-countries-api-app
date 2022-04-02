import "../Styles/SearchStyles.css";

const SearchComponent = ({ searchText, setSearchText, darkLightMode }) => {
  const prevDef = (e) => {
    e.preventDefault();
  };

  return (
    <div id='searchContainer' style={darkLightMode ? { backgroundColor: "#2b3945" } : { backgroundColor: "white" }}>
      <form id='searchForm' onSubmit={prevDef}>
        <div
          id='searchIcon'
          style={
            darkLightMode
              ? { filter: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(34deg) brightness(101%) contrast(104%)" }
              : { filter: "brightness(0) saturate(100%) invert(57%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(92%) contrast(89%)" }
          }
        />

        <input
          id='searchInput'
          type='text'
          placeholder='Search for a country...'
          onChange={(e) => setSearchText(e.target.value)}
          input={searchText}
          style={darkLightMode ? { color: "#ffffff" } : { color: "#858585" }}
        />
      </form>
    </div>
  );
};

export default SearchComponent;
