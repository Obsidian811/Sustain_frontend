import React, { useState } from 'react';

const FindSeller = () => {
  // Dummy data for the sellers
  const sellers = [
    { name: 'John Doe', material: 'Paper Waste', price: 10 },
    { name: 'Jane Smith', material: 'Plastic Waste', price: 15 },
    { name: 'Emily Johnson', material: 'Glass Waste', price: 20 },
    { name: 'Michael Brown', material: 'E-Waste', price: 25 },
  ];

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle category selection
  const handleCategoryChange = (e: any) => {
    setSelectedCategory(e.target.value);
  };

  // Filter sellers based on the selected category
  const filteredSellers = sellers.filter(
    (seller) => seller.material === selectedCategory || selectedCategory === ''
  );

  return (
    <div>
      <h2>Find a Seller</h2>

      {/* Dropdown to select category */}
      <label htmlFor="category">Select Waste Category:</label>
      <select
        id="category"
        onChange={handleCategoryChange}
        value={selectedCategory}
      >
        <option value="">All</option>
        <option value="Paper Waste">Paper Waste</option>
        <option value="Plastic Waste">Plastic Waste</option>
        <option value="Glass Waste">Glass Waste</option>
        <option value="E-Waste">E-Waste</option>
        {/* Add other categories here */}
      </select>

      {/* Displaying filtered sellers */}
      <div>
        {filteredSellers.length === 0 ? (
          <p>No sellers found for this category.</p>
        ) : (
          <ul>
            {filteredSellers.map((seller, index) => (
              <li key={index}>
                <p><strong>Name:</strong> {seller.name}</p>
                <p><strong>Material:</strong> {seller.material}</p>
                <p><strong>Price:</strong> ${seller.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FindSeller;