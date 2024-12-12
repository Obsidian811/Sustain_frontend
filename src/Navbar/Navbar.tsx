// src/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbarStyle}>
            <Link to="/profile-button" className={styles.linkStyle}>Profile</Link>
            <Link to="/" className={styles.linkStyle}>Home</Link>
            <Link to="/about" className={styles.linkStyle}>About Us</Link>
            <Link to="/for-business" className={styles.linkStyle}>For Business</Link>
            <Link to="/for-customer" className={styles.linkStyle}>For Customer</Link>
            <Link to="/login" className={styles.linkStyle}>Login</Link>
        </nav>
    );
};


export default Navbar;