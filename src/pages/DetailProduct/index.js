import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar.js';

export default function Home() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getData = () => {
    axios
      .get(`http://localhost:8000/products/${id}`)
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
                    <p className="text-secondary">Zalora Cloth</p>
                    <p className="text-secondary mt-2">Price</p>
                    <p className="">
                      <b>{item.price}</b>
                    </p>
                    <p>Color</p>

                    <div className="d-flex flex-row ">
                      <div>
                        <p>Size</p>
                        <p>- 39 +</p>
                      </div>
                      <div>
                        <p>Jumlah</p>
                        <p>- 1 +</p>
                      </div>
                    </div>

                    <div className="d-flex flex-row ">
                      <button className="btn btn-outline-secondary rounded-pill">
                        Chart
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
