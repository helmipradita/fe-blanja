import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import blanja from '../../src/images/assets/blanja.png';
import cart from '../../src/images/assets/cart.png';
import Filter from './Filter.js';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
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
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: 500 }}
            />
          </form>

          <div style={{ paddingRight: 100 }}>
            <Filter />
          </div>

          <Link className="nav-link" to="/my-bag">
            <img src={cart} alt="cart" />
          </Link>

          <div style={{ padding: 10 }}>
            <Button variant="danger rounded-pill" style={{ width: 100 }}>
              <Link className="nav-link" to="/logincustomer">
                Login
              </Link>
            </Button>
          </div>
          <div>
            <Button
              variant="outline-danger rounded-pill"
              style={{ width: 100 }}
            >
              <Link className="nav-link" to="/signupcustomer">
                Sign Up
              </Link>
            </Button>{' '}
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
