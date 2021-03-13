import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1>Header logo here!</h1>
    <Link to="/" className="nav-link">All Meals</Link>
    <Link to="/" className="nav-link">Contacts</Link>
    <Link to="/" className="nav-link">About</Link>
  </div>
);

export default Header;
