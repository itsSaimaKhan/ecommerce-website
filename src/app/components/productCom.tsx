// pages/index.js
import React from 'react';

const ProductComparison = () => {
  const products = [
    {
      name: 'Product A',
      image: '/images/product-a.jpg',
      price: '$199',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      name: 'Product B',
      image: '/images/product-b.jpg',
      price: '$249',
      features: ['Feature 1', 'Feature 2', 'Feature 5', 'Feature 6'],
    },
    {
      name: 'Product C',
      image: '/images/product-c.jpg',
      price: '$299',
      features: ['Feature 3', 'Feature 4', 'Feature 5', 'Feature 6'],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Product Comparison</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b text-gray-600">Product</th>
              {products.map((product, index) => (
                <th key={index} className="px-6 py-3 border-b text-gray-600">
                  <img src={product.image} alt={product.name} className="w-20 mx-auto" />
                  <p className="mt-2 font-medium">{product.name}</p>
                  <p className="text-xl font-bold">{product.price}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b text-gray-600">Features</td>
              {products.map((product, index) => (
                <td key={index} className="px-6 py-4 border-b">
                  <ul className="list-disc pl-5 text-gray-700">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            {/* Add more rows for other details */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductComparison;
