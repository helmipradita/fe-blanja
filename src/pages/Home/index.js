import React, { useState } from 'react';
import Navbar from '../../components/Navbar.js';
import { Container } from 'react-bootstrap';
import CarouselCategories from '../../components/CarouselCategories';
import CarouselAds from '../../components/CarouselAds';
import styles from './Home.module.css';

export default function Home() {
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
