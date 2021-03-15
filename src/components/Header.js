import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../assets/components/Header.css';

const Header = () => (
  <Navbar className="header d-flex flex-row justify-content-between">
    <div className="text-uppercase ml-5 font-weight-bolder mt-1">
      <h2 className="display-4">
        Recipes-4-u
      </h2>
    </div>
    <div className="">
      <span className="nav-right mx-3 text-uppercase h5">About</span>
      <span className="nav-right mx-3 text-uppercase h5">My recipes</span>
    </div>
  </Navbar>
);

export default Header;
