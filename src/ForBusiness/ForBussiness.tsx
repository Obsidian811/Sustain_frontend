import React from 'react';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#004d00', color: 'white', padding: '10px 20px' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/path/to/logo.png" 
              alt="Logo" 
              style={{ height: '40px', marginRight: '10px' }}
            />
            <h1 style={{ margin: 0 }}>SustainaLink</h1>
          </div>
          <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
            <li style={{ margin: '0 10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About Us</a></li>
            <li style={{ margin: '0 10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>For Business</a></li>
            <li style={{ margin: '0 10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>For Customers</a></li>
            <li style={{ margin: '0 10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#f2f2f2' }}>
        <h2>Welcome, XYZ!</h2>
        <h3 style={{ color: '#006600', fontWeight: 'bold' }}>Turn your waste into wealth!</h3>
        <p style={{ fontSize: '18px', color: '#555' }}>Businesses can list their products and sell them in an eco-friendly way.</p>
        <div style={{ margin: '20px auto', maxWidth: '400px' }}>
          <input 
            type="text" 
            placeholder="Search for Sellers" 
            style={{ width: 'calc(100% - 40px)', padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }}
          />
        </div>
      </div>

      {/* Product Listing Section */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        {[...Array(4)].map((_, index) => (
          <div 
            key={index} 
            style={{ 
              width: '200px', 
              height: '200px', 
              margin: '10px', 
              backgroundColor: '#e0e0e0', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              borderRadius: '10px' 
            }}
          >
            <p>Product {index + 1}</p>
            <button 
              style={{ 
                backgroundColor: '#006600', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                padding: '10px 20px', 
                cursor: 'pointer' 
              }}
              onClick={() => alert('List your product!')}
            >
              List Your Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
