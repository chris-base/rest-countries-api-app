import "../Styles/SearchStyles.css";

const SearchComponent = () => {
  return (
    <div id='searchContainer'>
      <form id='searchForm'>
        <div id='searchIcon' />

        <input id='searchInput' type='text' placeholder='Search for a country...' />
      </form>
    </div>
  );
};

export default SearchComponent;
