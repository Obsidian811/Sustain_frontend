import React from 'react';
import styles from './LandingPage.module.css'

const LandingPage: React.FC = () => {
    return (
        <div className={styles.style}>
            <p className={styles.heading}>SustainaLink</p>
            <p className={styles.para}>Your journey starts here!</p>
        </div>
    );
};


export default LandingPage;