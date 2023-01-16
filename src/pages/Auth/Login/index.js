import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import blanja from '../../../images/assets/blanja.png';
import { loginUser } from '../../../redux/actions/login';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function LoginCustomer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(loginUser(data, navigate));
  };

  return (
    <div className="container mt-5">
      <div align="center">
        <img src={blanja} alt="blanjalogo" />
        <h3 className="mt-4">Please login with your account</h3>

        <div className="mt-4">
          <Button className="btn-lg" variant="danger" style={{ width: 150 }}>
            <Link className="nav-link" to="#">
              Customer
            </Link>
          </Button>{' '}
          <Button
            className="btn-lg"
            variant="outline-secondary"
            style={{ width: 150 }}
          >
            <Link className="nav-link" to="/loginseller">
              Seller
            </Link>
          </Button>{' '}
        </div>

        <form onSubmit={loginData}>
          <div className="col-md-4 mt-4">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email"
                aria-label="Email"
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                type="password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <p className="text-danger d-flex justify-content-end mt-3 mb-4">
              <a
                href="/resetpasswordcustomer"
                class="text-danger text-decoration-none"
              >
                Forgot password?
              </a>
            </p>
            <button className="btn btn-danger rounded-pill mb-4" type="submit">
              Login
            </button>
            <p>
              Don't have a blanja account?
              <a
                href="/registercustomer"
                class="text-danger text-decoration-none"
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
