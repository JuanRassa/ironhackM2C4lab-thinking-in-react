import React from 'react';

const ProductRow = ({
  productInfo: { id, category, name, price, inStock },
}) => {
  return (
    <tr className={`${inStock ? 'inStock' : 'outOfStock'}`}>
      <td className="product-name">{name}</td>
      <td className="product-price">{price}</td>
    </tr>
  );
};

export default ProductRow;
