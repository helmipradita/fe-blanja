import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import NavbarAuth from '../../../components/NavbarAuth.js';

export default function MyBag() {
  const [bag, setBag] = useState();
  const [price, setPrice] = useState('');
  const [orders, setOrders] = useState('');
  const Navigate = useNavigate();
  const token = localStorage.getItem('token');
  async function fetchData() {
    try {
      const token = localStorage.getItem('token');
      const result = await axios.get(
        process.env.REACT_APP_BACKEND_API_HOST + `/carts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBag(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteData = async (id) => {
    //sending
    await axios.delete(
      process.env.REACT_APP_BACKEND_API_HOST + `/carts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    Swal.fire('Good job!', 'Delete Sukses', 'success');
    //panggil function "fetchData"
  };

  const handleOrders = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      console.log(orders);
      console.log(token);
      await axios.post(
        process.env.REACT_APP_BACKEND_API_HOST + `/orders`,
        orders,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // await axios.delete(
      //   process.env.REACT_APP_BACKEND_API_HOST + `/carts/${bag[0].id}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
      Swal.fire('Good job!', 'Orders Sukses', 'success');
      Navigate('/dashboard/my-checkout');
    } catch (error) {
      console.log(error);
      return Swal('Good Job!', 'Login Success', 'success');
    }
  };
  useEffect(() => {
    if (price) {
      setOrders({
        ...orders,
        id: bag[0].id,
        total: bag[0].price * bag[0].amount,
        amount: bag[0].amount,
      });
    }
  }, [price, bag]);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (bag) {
      let total = 0;
      bag.map((item) => (total = total + item.price * item.amount));
      setPrice(total);
    }
  }, [bag]);
  console.log(bag);
  return (
    <div>
      <NavbarAuth />
      <section>
        <Container>
          <div className="container-fluid my-5">
            <h2 className="text-left">My bag</h2>
            <div className="row">
              <div className="col-md-8">
                <br />
                {!bag ? (
                  <p>Loading...</p>
                ) : bag.length < 1 ? (
                  <p>Bag is empty</p>
                ) : (
                  bag.map((item) => (
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
                                src={item.photo}
                                alt="photo1"
                                width={80}
                                style={{ borderRadius: 10 }}
                              />
                              <p className=""></p>
                            </div>
                            <div className="col-md-5">
                              <p className="">{item.name}</p>
                              <p className="text-secondary">
                                {item.categories_name}
                              </p>
                            </div>
                            <div className="col-md-2 button">
                              <p className="">{item.items}</p>
                            </div>
                            <div className="col-md-2">Rp. {item.price}</div>
                          </div>
                          <Button
                            onClick={() => deleteData(item.id)}
                            variant="danger"
                            size="md"
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
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
                    <button
                      className="btn btn-danger"
                      onClick={handleOrders}
                      style={{
                        height: '50px',
                        borderRadius: '40px',
                        width: '350px',
                      }}
                    >
                      <p style={{ marginTop: '10px' }}>Buy</p>
                    </button>
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
