import React from 'react';
import styles from './LandingPage.module.css'

const LandingPage: React.FC = () => {
    return (
        <div className={styles.style}>
            <h1>Welcome to Our Website</h1>
            <p>Your journey starts here!</p>
        </div>
    );
};


export default LandingPage;