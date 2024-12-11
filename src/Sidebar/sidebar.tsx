import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <div style={{ ...sidebarStyle, display: isOpen ? 'block' : 'none' }}>
            <div style={logoStyle}>
                <img src="./assets/original-removedbg.png" alt="Logo" style={logoImageStyle} />
            </div>
            <h3 style={head}>Menu</h3>
            <ul style={listStyle}>
                <li><Link to="/my-profile" style={linkStyle}>My Profile</Link></li>
                <li><Link to="/catalogue" style={linkStyle}>Catalogue</Link></li>
                <li><Link to="/find-seller" style={linkStyle}>Find Seller</Link></li>
                <li><Link to="/track-orders" style={linkStyle}>Track Orders</Link></li>
                <li><Link to="/chatroom" style={linkStyle}>Chat Room</Link></li>
                <li><Link to="/logout" style={linkStyle}>Logout</Link></li>
            </ul>
        </div>
    );
};

const head: React.CSSProperties = {
    color: 'black',
};

const sidebarStyle: React.CSSProperties = {
    width: '200px',
    backgroundColor: 'rgba(244, 244, 244, 0.8)', // Translucent background
    padding: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    transition: '0.3s',
};

const logoStyle: React.CSSProperties = {
    textAlign: 'center',
    // top: '40px',
    marginBottom: '20px',
};

const logoImageStyle: React.CSSProperties = {
    width: '100px', // Adjust the size as needed
    height: 'auto',
};

const listStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: 0,
};

const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#000',
    padding: '10px 0',
    display: 'block',
};

export default Sidebar;