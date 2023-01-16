import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/NavbarAuth.js';
import { Container, Card } from 'react-bootstrap';
import CarouselCategories from '../../components/CarouselCategories';
import CarouselAds from '../../components/CarouselAds';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        let result = await axios.get(
          process.env.REACT_APP_BACKEND_API_HOST + `/products/all`
        );
        setDataProducts(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);

  return (
    <div>
      <Navbar />
      <section>
        <Container>
          <div className="container-fluid my-5">
            <div>
              <CarouselAds />
            </div>

            <h5 className="text-left mt-4">Categories</h5>
            <p className="text-secondary">What are you currently looking for</p>
            <div className={styles.carousel}>
              <CarouselCategories />
            </div>

            <br />
            <h5 className="text-left mt-4">Popular</h5>
            <p className="text-secondary">
              Find clothes that are trending recently
            </p>
            <div className="row mb-2">
              {dataProducts?.map((item) => (
                <div className="col-md-2 mb-2">
                  <div className="card" key={item.id}>
                    <Card to={`/detailproduct/${item.id}`} as={Link}>
                      <div className="card-top">
                        <img
                          className={styles.gambar}
                          src={item.photo}
                          alt="photos"
                          to={`/detailproduct/${item.id}`}
                          as={Link}
                        />
                      </div>
                      <div className="card-bottom center">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
