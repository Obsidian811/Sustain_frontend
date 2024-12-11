import React from 'react'; 

const ForCustomer: React.FC = () => 
{
    return (
        <div style={pageStyle}>
            <header style={headerStyle}>
                <h1 style={headerTitleStyle}>For Customers</h1>
            </header>
            <section style={contentSectionStyle}>
                <p style={paragraphStyle}>Explore our curated selection of sustainable goodies and services tailored just for you.</p>
                <div style={gridStyle}>
                    <div style={cardStyle}></div>
                    <div style={cardStyle}></div>
                    <div style={cardStyle}></div>
                    <div style={cardStyle}></div>
                </div>
            </section>
        </div>
    );
};

const pageStyle: React.CSSProperties = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh'
};

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#0b4826',
    color: 'white',
    padding: '20px 0',
    marginBottom: '20px'
};

const headerTitleStyle: React.CSSProperties = {
    fontSize: '32px',
    margin: 0
};

const contentSectionStyle: React.CSSProperties = {
    textAlign: 'center'
};

const paragraphStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px'
};

const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px'
};

const cardStyle: React.CSSProperties = {
    width: '150px',
    height: '150px',
    backgroundColor: '#eaeaea',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
};

export default ForCustomer;
