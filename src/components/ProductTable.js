import ProductRow from './ProductRow';

const ProductTable = ({ stockData }) => {
  console.log('stockData', stockData);
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
          {stockData.map((product) => {
            return <ProductRow key={product.id} productInfo={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
