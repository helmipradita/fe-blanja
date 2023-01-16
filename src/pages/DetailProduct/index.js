import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar.js';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

export default function DetailProduct() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const [items, setItems] = useState(1);
  const [price, setPrice] = useState(200000);
  const [carts, setCarts] = useState({
    products_id: '',
    items: items,
    price: price,
  });
  let token = localStorage.getItem('token');
  //   const [startDate, setStartDate] = useState(new Date());
  const decoded = jwt_decode(token);

  console.log(useState(1), 'cek');
  console.log(decoded, 'token decode');
  if (data) {
    carts.products_id = data.id;
    carts.items = items;
    carts.price = price;
  }

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios({
  //       method: 'GET',
  //       url: process.env.REACT_APP_BACKEND_API_HOST + `/products/all/${id}`,
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setData(res.data.data[0]);
  //   };
  //   getData();
  // }, [id]);

  const addBag = async () => {
    try {
      console.log(token, 'token addbag');
      await axios({
        method: 'POST',
        url: process.env.REACT_APP_BACKEND_API_HOST + `/carts/${id}`,
        data: carts,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Add Product to bag success',
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'warning',
        title: 'failed',
        text: 'Add Product to bag failed',
      });
    }
  };

  const getData = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_API_HOST + `/products/all/${id}`)
      .then((res) => {
        console.log('get data success');
        setData(res.data.data);
        console.log(res.data, 'data products');
        console.log(res.data.data[0].name, 'res data');
      })
      .catch((err) => {
        console.log('get data fail');
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <section>
        <div>
          {data.map((item, index) => {
            return (
              <div key={index} className="container mt-5">
                <p className="text-secondary">Home - {item.name} </p>
                <div className="container row">
                  <div className="col-6 row">
                    <img src={item.photo} alt=""></img>
                  </div>
                  <div className="col-6 ml-4">
                    <h3>{item.name}</h3>
                    <p className="text-secondary">{item.categories_name}</p>
                    <p className="text-secondary mt-2">Price</p>
                    <p className="">
                      <b>{item.price}</b>
                    </p>
                    <p>Color</p>

                    <div className="d-flex flex-row ">
                      <div className="row">
                        <p>Jumlah</p>
                        <div className="d-flex flex-row">
                          <button
                            onClick={() => setItems(items - 1)}
                            className=" btn-min "
                            style={{
                              borderRadius: '50%',
                              marginRight: '10px',
                              width: '30px',
                              height: '30px',
                            }}
                          >
                            -
                          </button>
                          {items}
                          <button
                            onClick={() => setItems(items + 1)}
                            className=" btn-min "
                            style={{
                              borderRadius: '50%',
                              marginLeft: '10px',
                              width: '30px',
                              height: '30px',
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row ">
                      <button
                        onClick={addBag}
                        className="btn btn-outline-secondary rounded-pill btn-lg"
                        type="submit"
                      >
                        Add Bag
                      </button>
                      <button className="btn btn-outline-secondary rounded-pill">
                        Add Tag
                      </button>
                      <button className="btn btn-danger rounded-pill">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <h2 className="fw-bold">Informasi Product</h2>
                  <h4 className="fw-bold mt-4">Condition</h4>
                  <h5 className="text-danger kondisi">New</h5>
                  <h5 className="fw-bold mt-4">Description</h5>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima, eveniet, reiciendis consequuntur nisi sapiente ipsa
                    repudiandae unde voluptas esse accusantium officia quos
                    blanditiis! Sint quos modi quas amet repudiandae tempora.
                    Tenetur deleniti veritatis reiciendis, beatae saepe
                    doloribus hic! Doloremque illum laboriosam dolorem
                    recusandae aperiam tempora modi iusto aliquam maiores.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
