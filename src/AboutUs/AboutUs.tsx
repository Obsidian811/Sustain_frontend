import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to SustainaLink</h1>
        <p style={styles.subtitle}>
        Redefining Waste, Redesigning Futures
        </p>
      </header>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>Who We Are</h2>
        <p style={styles.text}>
          SustainaLink is more than just a platform; it’s a movement to bridge the gap between technology, businesses, and sustainable practices. Our mission is to empower organizations and individuals with innovative solutions that drive meaningful environmental and social impact.
        </p>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>What Makes Us Stand Out?</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>🌍 Sustainability Focus</h3>
            <p style={styles.text}>
              Our solutions are built with a deep commitment to reducing carbon footprints , limit the waste generated in linear economy network and promoting eco-friendly practices.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>🤝 Meaningful Partnerships</h3>
            <p style={styles.text}>
              We collaborate with businesses, NGOs, and governments to ensure a holistic approach to achieving Sustainable Development Goals (SDGs).
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>💡 Cutting-Edge Technology</h3>
            <p style={styles.text}>
              Leveraging cutting edge technologies through functionalities such as chatroom and tracking orders to deliver innovative solutions that drive sustainable transformation.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>📈 Data-Driven Insights</h3>
            <p style={styles.text}>
              Our platform provides actionable insights, enabling stakeholders to make informed decisions for a greener future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section style={styles.visionSection}>
        <h2 style={styles.sectionTitle}>Our Vision</h2>
        <p style={styles.text}>
          At SustainaLink, we envision a world where businesses thrive while prioritizing people and the planet. We are driven by the belief that technology can be a powerful force for good, transforming industries and creating a more equitable and sustainable future.
        </p>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <h2 style={styles.sectionTitle}>Join Us in Making a Difference</h2>
        <p style={styles.text}>
          Be a part of the SustainaLink community and contribute to building a sustainable future. Together, we can create a lasting impact.
        </p>
        <button style={styles.ctaButton}>Learn More</button>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    lineHeight: "1.6",
    color: "#333",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "50px 20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginTop: "10px",
  },
  aboutSection: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1rem",
    margin: "0 auto",
    maxWidth: "800px",
  },
  featuresSection: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  featureCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  featureTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  visionSection: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#e8f5e9",
  },
  ctaSection: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#4CAF50",
    color: "#fff",
  },
  ctaButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#333",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AboutUs;