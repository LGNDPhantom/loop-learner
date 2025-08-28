// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        {children}
      </div>
    </>
  );
};

export default Layout;

