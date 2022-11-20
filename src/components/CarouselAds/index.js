import React, { Component } from 'react';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../images/assets/ads/1.png';
import img2 from '../../images/assets/ads/2.png';
import img3 from '../../images/assets/ads/3.png';

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        background: '#d4d4d4',
      }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <Container>
        <div style={{ margin: 30 }}>
          <Slider {...settings}>
            <div>
              <h3>
                <img src={img1} alt="img1" style={{ width: 350 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img2} alt="img2" style={{ width: 350 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img3} alt="img3" style={{ width: 350 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img1} alt="img1" style={{ width: 350 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img2} alt="img2" style={{ width: 350 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img3} alt="img3" style={{ width: 350 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img1} alt="img1" style={{ width: 350 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img2} alt="img2" style={{ width: 350 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img3} alt="img3" style={{ width: 350 }} />
              </h3>
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
