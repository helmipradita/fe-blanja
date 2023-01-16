import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import blanja from '../../src/images/assets/blanja.png';
import Filter from './Filter.js';
import cart from '../../src/images/assets/cart.png';
import bell from '../../src/images/assets/bell.png';
import mail from '../../src/images/assets/mail.png';
import profile from '../../src/images/assets/profile.png';
import { useSelector } from 'react-redux';

const NavbarAuth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [whoIsLogin, setWhoIsLogin] = useState('');

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  const token = localStorage.getItem('token');

  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (user.role === 'toko') {
      setIsLogin(true);
    } else if (user.role === 'customer') {
      setIsLogin(true);
    }
  }, []);
  console.log(isLogin);

  useEffect(() => {
    console.log(user);
  }, [user]);
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
              to="/dashboard/my-bag"
            >
              <img src={cart} alt="cart" />
            </Link>
            <Link
              className="nav-link"
              style={{ paddingRight: 20 }}
              to="/dashboard/my-bag"
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
          {!isLogin && (
            <div>
              <Link to="/logincustomer">
                <button
                  className="btn btn-info btn-small"
                  onClick={() => logout()}
                >
                  Login
                </button>
              </Link>
            </div>
          )}
          {isLogin && (
            <div>
              <img src={cart}></img>
              <button
                className="btn btn-danger btn-small"
                onClick={() => logout()}
              >
                logout
              </button>
            </div>
          )}
        </Container>
      </nav>
    </div>
  );
};

export default NavbarAuth;
