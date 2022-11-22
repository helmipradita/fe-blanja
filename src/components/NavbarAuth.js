import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import blanja from '../../src/images/assets/blanja.png';
import Filter from './Filter.js';
import cart from '../../src/images/assets/cart.png';
import bell from '../../src/images/assets/bell.png';
import mail from '../../src/images/assets/mail.png';
import profile from '../../src/images/assets/profile.png';

const Navbar = () => {
  const navigate = useNavigate;
  const logout = () => {
    localStorage.clear();
    navigate('/logincustomer');
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          <Link className="navbar-brand" to="/home">
            <img src={blanja} className="App-logo" alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="form-inline">
            <input
              className="form-control mr-sm-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: 400 }}
            />
          </form>

          <div style={{ paddingRight: 200 }}>
            <Filter />
          </div>

          <div className="d-flex">
            <Link
              className="nav-link"
              style={{ paddingRight: 20 }}
              to="/my-bag"
            >
              <img src={cart} alt="cart" />
            </Link>
            <Link
              className="nav-link"
              style={{ paddingRight: 20 }}
              to="/my-bag"
            >
              <img src={bell} alt="bell" />
            </Link>
            <Link
              className="nav-link"
              style={{ paddingRight: 20 }}
              to="/my-bag"
            >
              <img src={mail} alt="mail" />
            </Link>
            <Link
              className="nav-link"
              style={{ paddingRight: 20 }}
              to="/my-bag"
            >
              <img src={profile} alt="profile" />
            </Link>
          </div>
          <button className="btn btn-danger btn-small" onClick={() => logout()}>
            logout
          </button>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
