import React from 'react';
import "./AboutUs.module.css";

const AboutUs = () => (
  <div className="about-container">
    {/* Header Section */}
    <header className="header">
      <h1 className="title">Welcome to SustainaLink</h1>
      <p className="subtitle">Redefining Waste, Redesigning Futures</p>
    </header>

    {/* Glassmorphism Content Section */}
    <div className="glass-card">
      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">Who We Are</h2>
        <p className="text">
          SustainaLink is more than just a platform; it’s a movement to bridge
          the gap between technology, businesses, and sustainable practices.
          Our mission is to empower organizations and individuals with
          innovative solutions that drive meaningful environmental and social
          impact.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">What Makes Us Stand Out?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">🌍 Sustainability Focus</h3>
            <p className="text">
              Our solutions are built with a deep commitment to reducing carbon
              footprints, limiting waste, and promoting eco-friendly practices.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">🤝 Meaningful Partnerships</h3>
            <p className="text">
              We collaborate with businesses, NGOs, and governments to achieve
              holistic Sustainable Development Goals (SDGs).
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">💡 Cutting-Edge Technology</h3>
            <p className="text">
              Leveraging functionalities like chatrooms and order tracking to
              deliver innovative sustainable solutions.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">📈 Data-Driven Insights</h3>
            <p className="text">
              Our platform provides actionable insights for informed decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <h2 className="section-title">Our Vision</h2>
        <p className="text">
          At SustainaLink, we envision a world where businesses thrive while
          prioritizing people and the planet. We believe that technology can
          transform industries and create a more sustainable future.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="section-title">Join Us in Making a Difference</h2>
        <p className="text">
          Be part of the SustainaLink community and contribute to building a
          sustainable future. Together, we can create a lasting impact.
        </p>
        <button className="cta-button">Learn More</button>
      </section>
    </div>
  </div>
);

export default AboutUs;

