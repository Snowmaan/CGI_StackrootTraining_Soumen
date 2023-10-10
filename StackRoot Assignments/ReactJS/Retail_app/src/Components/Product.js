import React from 'react';

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>$10.99</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>$19.99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Products;
