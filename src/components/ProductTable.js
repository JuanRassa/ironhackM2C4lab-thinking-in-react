import ProductRow from './ProductRow';

const ProductTable = ({ stockData, searchResult }) => {
  // console.log('searchResult', searchResult);
  return (
    <div className="product-table flex-col-center">
      <h2>Product Table</h2>

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {searchResult.map((product) => {
            return <ProductRow key={product.id} productInfo={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
