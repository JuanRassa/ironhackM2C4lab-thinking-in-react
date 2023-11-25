import { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import stockData from './../data.json';

const ProductsPage = () => {
  const [rawData, setRawData] = useState(stockData);
  console.log(rawData);
  return (
    <>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable stockData={rawData} />
    </>
  );
};

export default ProductsPage;
