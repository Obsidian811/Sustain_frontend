import React from 'react';
import styles from './AboutUs.module.css'

const AboutUs: React.FC = () => {
    return (
        <div className={styles.style}>
            <h2>About Us</h2>
            <p>We are a company dedicated to providing the best services.</p>
        </div>
    );
};

// const pageStyle: React.CSSProperties = {
//     padding: '20px',
// };

export default AboutUs;