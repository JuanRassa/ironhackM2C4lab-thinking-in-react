import { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import stockData from './../data.json';

const ProductsPage = () => {
  const [rawData, setRawData] = useState(stockData);
  const [userSearch, setUserSearch] = useState('');
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const searchResult = rawData.filter((product) => {
    const productName = product.name.toLowerCase();
    if (showOnlyInStock) {
      return (
        productName
          .substring(0, product.name.length)
          .startsWith(userSearch.toLowerCase()) && product.inStock
      );
    } else {
      return productName
        .substring(0, product.name.length)
        .startsWith(userSearch.toLowerCase());
    }
  });

  return (
    <>
      <h1>IronStore</h1>
      <SearchBar
        searchTerm={userSearch}
        updateSearchTerm={setUserSearch}
        showOnlyInStock={showOnlyInStock}
        setShowOnlyInStock={setShowOnlyInStock}
      />
      <ProductTable stockData={rawData} searchResult={searchResult} />
    </>
  );
};

export default ProductsPage;
