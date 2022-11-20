import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarAuth from '../../../components/NavbarAuth.js';

export default function Home() {
  return (
    <div>
      <NavbarAuth />
      <section>
        <Container>
          <div className="container-fluid my-5">
            <h2 className="text-left">My bag</h2>
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                    <b className="ml-2" style={{ paddingLeft: 10 }}>
                      Select all items
                    </b>{' '}
                    <b
                      className="text-danger ml-5"
                      style={{ paddingLeft: 450 }}
                    >
                      Delete
                    </b>
                  </div>
                </div>
                <br />
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                        </div>
                        <div className="col-md-2">
                          <img
                            className="photo"
                            src="https://placeimg.com/150/150/tech"
                            alt="photo1"
                            width={80}
                            style={{ borderRadius: 10 }}
                          />
                        </div>
                        <div className="col-md-5">
                          <p className="">Mens formal suit - Black</p>
                          <p className="text-secondary">Zalora cloth</p>
                        </div>
                        <div className="col-md-2 button">
                          <p className="">- 1 +</p>
                        </div>
                        <div className="col-md-2">$ 20.0</div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                        </div>
                        <div className="col-md-2">
                          <img
                            className="photo"
                            src="https://placeimg.com/150/150/tech"
                            alt="photo1"
                            width={80}
                            style={{ borderRadius: 10 }}
                          />
                        </div>
                        <div className="col-md-5">
                          <p className="">Mens formal suit - Black</p>
                          <p className="text-secondary">Zalora cloth</p>
                        </div>
                        <div className="col-md-2 button">
                          <p className="">- 1 +</p>
                        </div>
                        <div className="col-md-2">$ 20.0</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <b className="">Shopping summary</b>
                    <div className="row">
                      <div className="col-md-8">
                        <p className="text-secondary">Total price</p>
                      </div>
                      <div className="col-md-4">
                        <b className="">$ 40.0</b>
                      </div>
                    </div>
                    <Button
                      className="btn btn-danger btn-block rounded-pill mb-4"
                      variant="danger"
                      style={{ width: 300 }}
                    >
                      <Link className="nav-link" to="#">
                        Buy
                      </Link>
                    </Button>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
