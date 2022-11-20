import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import blanja from '../../../../images/assets/blanja.png';

export default function LoginSeller() {
  return (
    <div className="container mt-5">
      <div align="center">
        <img src={blanja} alt="blanjalogo" />
        <h3 className="mt-4">Please login with your account</h3>

        <div className="mt-4">
          <Button
            className="btn-lg"
            variant="outline-secondary"
            style={{ width: 150 }}
          >
            <Link className="nav-link" to="/logincustomer">
              Customer
            </Link>
          </Button>{' '}
          <Button className="btn-lg" variant="danger" style={{ width: 150 }}>
            <Link className="nav-link" to="/loginseller">
              Seller
            </Link>
          </Button>{' '}
        </div>

        <div className="col-md-4 mt-4">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <p className="text-danger d-flex justify-content-end mt-3 mb-4">
            <a
              href="/resetpasswordseller"
              class="text-danger text-decoration-none"
            >
              Forgot password?
            </a>
          </p>
          <Button
            className="btn btn-danger btn-block rounded-pill mb-4"
            variant="danger"
            style={{ width: 300 }}
          >
            <Link className="nav-link" to="#">
              Login
            </Link>
          </Button>{' '}
          <p>
            Don't have a blanja account?
            <a href="/registerseller" class="text-danger text-decoration-none">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
