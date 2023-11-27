const SearchBar = ({
  searchTerm,
  updateSearchTerm,
  showOnlyInStock,
  setShowOnlyInStock,
}) => {
  return (
    <div className="search-container flex-col-center">
      <div className="search-input flex-col-center">
        {/* <label htmlFor="searchProducts">Search</label> */}
        <input
          value={searchTerm}
          onInput={(e) => updateSearchTerm(e.target.value)}
          type="text"
          name="searchProducts"
          id="searchProducts"
          placeholder="Search product..."
        />
      </div>
      <div className="search-filterByStock flex-row-center">
        <label htmlFor="onlyInStock">Only show products in stock</label>
        <input
          value={showOnlyInStock}
          onInput={(e) => setShowOnlyInStock(e.target.checked)}
          type="checkbox"
          name="onlyInStock"
          id="onlyInStock"
        />
      </div>
    </div>
  );
};

export default SearchBar;
