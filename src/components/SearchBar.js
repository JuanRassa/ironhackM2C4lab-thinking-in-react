const SearchBar = () => {
  return (
    <div className="search-container flex-col-center">
      <div className="search-input flex-col-center">
        <label htmlFor="searchProducts">Search</label>
        <input type="text" name="searchProducts" id="searchProducts" />
      </div>
      <div className="search-filterByStock flex-row-center">
        <label htmlFor="onlyInStock">Only show products in stock</label>
        <input type="checkbox" name="onlyInStock" id="onlyInStock" />
      </div>
    </div>
  );
};

export default SearchBar;
