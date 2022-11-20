import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import filter from '../../src/images/assets/filter.png';

const Filter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <>
        <Button variant="" onClick={handleShow}>
          <img src={filter} alt="filter" />
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>Colors</Modal.Body>
          <Modal.Body>Sizes</Modal.Body>
          <Modal.Body>
            {' '}
            <div className="row">
              <div className="col-md-2 mb-3">
                {' '}
                <div className="card text-center">
                  <b>XS</b>{' '}
                </div>{' '}
              </div>{' '}
              <div className="col-md-2 mb-3">
                {' '}
                <div className="card text-center">
                  <b>S</b>
                </div>{' '}
              </div>
              <div className="col-md-2 mb-3">
                {' '}
                <div className="card text-center">
                  <b>M</b>
                </div>{' '}
              </div>
              <div className="col-md-2 mb-3">
                {' '}
                <div className="card text-center">
                  <b>L</b>
                </div>{' '}
              </div>
              <div className="col-md-2 mb-3">
                {' '}
                <div className="card text-center">
                  <b>XL</b>
                </div>{' '}
              </div>
            </div>{' '}
          </Modal.Body>
          <Modal.Body>Category</Modal.Body>
          <Modal.Body>
            {' '}
            <div className="row">
              <div className="col-md-4 mb-3">
                {' '}
                <div className="card text-center">
                  <b>All</b>{' '}
                </div>{' '}
              </div>{' '}
              <div className="col-md-4 mb-3">
                {' '}
                <div className="card text-center">
                  <b>Women</b>
                </div>{' '}
              </div>
              <div className="col-md-4 mb-3">
                {' '}
                <div className="card text-center">
                  <b>Men</b>
                </div>{' '}
              </div>
              <div className="col-md-4 mb-3">
                {' '}
                <div className="card text-center">
                  <b>Boys</b>
                </div>{' '}
              </div>
              <div className="col-md-4 mb-3">
                {' '}
                <div className="card text-center">
                  <b>Girl</b>
                </div>{' '}
              </div>
            </div>{' '}
          </Modal.Body>
          <Modal.Body>Brand</Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Discard
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
