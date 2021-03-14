import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => (
  <Navbar className="header bg-primary">
    <div className="text-uppercase ml-5 display-4">Recipes for you</div>
    <div>
      <span className="mx-3 text-uppercase text-muted">Home</span>
      <span className="mx-3 text-uppercase text-muted">Categories</span>
    </div>
  </Navbar>
);

export default Header;
