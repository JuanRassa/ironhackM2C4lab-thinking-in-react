const ProductTable = () => {
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
          <tr>
            <td>Product Name!</td>
            <td>Product Price$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
