
import React from 'react';
import Footer from './Footer/Footer.tsx';

const App: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Other components */}
            {/* Example: <Navbar />, <Sidebar />, <Routes /> */}
            <Footer />
        </div>
    );
};

export default App;