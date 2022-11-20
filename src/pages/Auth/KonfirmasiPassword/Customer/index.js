import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import blanja from '../../../../images/assets/blanja.png';

export default function KonfirmasiPasswordCustomer() {
  return (
    <div className="container mt-5">
      <div align="center">
        <img src={blanja} alt="blanjalogo" />
        <h3 className="mt-4">Reset Password</h3>

        <div className="text-danger">
          <p>You need to change your password to activate your account</p>
        </div>

        <div className="col-md-4 mt-4">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Confirmation New Password"
              aria-label="Confirmation New Password"
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
          <Button
            className="btn btn-danger btn-block rounded-pill mb-4"
            variant="danger"
            style={{ width: 300 }}
          >
            <Link className="nav-link" to="/konfirmasipasswordlogincustomer">
              Login
            </Link>
          </Button>{' '}
        </div>
      </div>
    </div>
  );
}
