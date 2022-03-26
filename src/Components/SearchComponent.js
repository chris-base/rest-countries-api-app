import "../Styles/SearchStyles.css";

const SearchComponent = ({ searchText, setSearchText }) => {
  return (
    <div id='searchContainer'>
      <form id='searchForm'>
        <div id='searchIcon' />

        <input
          id='searchInput'
          type='text'
          placeholder='Search for a country...'
          onChange={(e) => setSearchText(e.target.value)}
          input={searchText}
        />
      </form>
    </div>
  );
};

export default SearchComponent;
