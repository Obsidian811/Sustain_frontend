
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar.tsx';
import Sidebar from './Sidebar/sidebar.tsx';
import ProfileButton from './ProfileButton.tsx';
import LandingPage from './LandingPage/LandingPage.tsx';
import AboutUs from './AboutUs/AboutUs.tsx';
import Login from './Login/Login.tsx';
import ForBusiness from './ForBusiness/ForBussiness.tsx';
import ForCustomer from './ForCustomer/ForCustomer.tsx';
import MyProfile from './Sidebar/MyProfile.tsx';
import Catalogue from './Sidebar/Catalogue.tsx';
import FindSeller from './Sidebar/FindSeller.tsx';
import TrackOrders from './Sidebar/TrackOrders.tsx';
import Chatroom from './Sidebar/Chatroom.tsx';
import ProductPage from './ForCustomer/ProductPage.tsx'


const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar isOpen={isSidebarOpen} />
                <div style={{ marginLeft: isSidebarOpen ? '220px' : '20px', flex: 1 }}>
                    <ProfileButton onClick={toggleSidebar} />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/for-business" element={<ForBusiness />} />
                        <Route path="/for-customer" element={<ForCustomer />} />
                        <Route path="/my-profile" element={<MyProfile />} />
                        <Route path="/catalogue" element={<Catalogue />} />
                        <Route path="/find-seller" element={<FindSeller />} />
                        <Route path="/track-orders" element={<TrackOrders />} />
                        <Route path="/chatroom" element={<Chatroom />} />
                        <Route path="/product-page" element={<ProductPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;