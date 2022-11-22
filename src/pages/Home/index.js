import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar.js';
import { Container, Card } from 'react-bootstrap';
import CarouselCategories from '../../components/CarouselCategories';
import CarouselAds from '../../components/CarouselAds';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        let result = await axios.get(`http://localhost:8000/products?limit=10`);
        setData(result.data.data);
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
            <h5 className="text-left mt-4">New</h5>
            <p className="text-secondary">You've never seen it before!</p>
            <div className="row mb-2">
              {data.map((item) => (
                <div className="col-md-2 mb-2">
                  <Card
                    to={`/detailproduct/${item.id}`}
                    as={Link}
                    className="text-decoration-none"
                  >
                    <div className="card">
                      <div className="card-top">
                        <img
                          className={styles.gambar}
                          src={item.photo}
                          alt=""
                        />
                      </div>
                      <div className="card-bottom">
                        <div>
                          <p>{item.name}</p>
                          <p className="text-danger" to="/logincustomer">
                            {' '}
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <br />
            <h5 className="text-left mt-4">Popular</h5>
            <p className="text-secondary">
              Find clothes that are trending recently
            </p>
            <div className="row mb-2">
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 mb-2">
                <div className="card">
                  <div className="card-top">
                    <img
                      className={styles.abbc}
                      src="https://placeimg.com/150/150/tech"
                      alt="photo1"
                    />
                  </div>
                  <div className="card-bottom center">
                    <p>Photo1</p>
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
