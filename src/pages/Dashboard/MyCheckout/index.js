import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import NavbarAuth from '../../../components/NavbarAuth.js';

export default function MyCheckout() {
  const [bag, setBag] = useState();
  const [price, setPrice] = useState('');
  const [checkout, setCheckout] = useState('');
  const Navigate = useNavigate();
  // const { id } = useParams();
  // async function fetchData() {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const result = await axios.get(
  //       process.env.REACT_APP_BACKEND_API_HOST + `/carts/${id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     setCheckout(result.data.data[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const handlePayment = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     console.log(token);
  //     console.log(id);
  //     await axios.put(
  //       process.env.REACT_APP_BACKEND_API_HOST + `/orders/${id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     Swal.fire('Success', 'Payment Succed', 'success');
  //     Navigate('/dashboard/myorder');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(checkout);
  return (
    <div>
      <NavbarAuth />
      <section>
        <Container>
          <div className="container-fluid my-5">
            <h2 className="text-left">Checkout</h2>
            <div className="row">
              <div className="col-md-8">
                <br />
                <div className="col col-8 row">
                  <div className="container col-12 row py-3">
                    <div className="col col-12 row container shadow py-3 align-items-center">
                      <div className="col-2">
                        {/* <img src={icon} alt="" className="bag-product" /> */}
                      </div>
                      <div className="col-4">
                        <h2>Gopay</h2>
                      </div>
                      <div className="col col-2 offset-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container col-12 row py-3">
                    <div className="col col-12 row container shadow py-3 align-items-center">
                      <div className="col-2">
                        {/* <img src={pos} alt="" className="bag-product" /> */}
                      </div>
                      <div className="col-4">
                        <h2>Pos</h2>
                      </div>
                      <div className="col col-2 offset-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container col-12 row py-3">
                    <div className="col col-12 row container shadow py-3 align-items-center">
                      <div className="col-2">
                        {/* <img src={cc} alt="" className="bag-product" /> */}
                      </div>
                      <div className="col-4">
                        <h2>Visa</h2>
                      </div>
                      <div className="col col-2 offset-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <b className="">Shopping summary</b>
                    {!bag ? (
                      <p>Loading...</p>
                    ) : bag.length < 1 ? (
                      <p>Bag is empty</p>
                    ) : (
                      bag.map((item) => (
                        <div className="row">
                          <div className="col-md-8">
                            <p className="text-secondary">Total price</p>
                          </div>
                          <div className="col-md-4">
                            <b className="">Rp. {item.price}</b>
                          </div>
                        </div>
                      ))
                    )}
                    {/* <button
                      className="btn btn-danger"
                      onClick={handlePayment}
                      style={{
                        height: '50px',
                        borderRadius: '40px',
                        width: '350px',
                      }}
                    >
                      <p style={{ marginTop: '10px' }}>Buy</p>
                    </button> */}
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
