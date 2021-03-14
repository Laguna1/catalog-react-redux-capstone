import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { resetStep } from '../actions/index';

import './Header.css';

const Header = () => (
  <Navbar className="header bg-primary d-flex flex-row justify-content-between">
    <div className="text-uppercase ml-5 display-4">
      <Link to="/">
        <button type="button" onClick={resetStep} className="btn rounded-0">Recipes for you</button>
      </Link>
    </div>
    <div>
      <span className="mx-3 text-uppercase text-muted h5">About</span>
      <span className="mx-3 text-uppercase text-muted h5">My recipes</span>
    </div>
  </Navbar>
);

export default Header;
