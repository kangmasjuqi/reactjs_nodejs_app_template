import React from 'react';
import './App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Navbar() {
  return (
      <nav>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>title...</Breadcrumb.Item>
        </Breadcrumb>
      </nav>
  );
}

export default Navbar;
