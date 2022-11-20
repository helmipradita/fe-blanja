import React, { Component } from 'react';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../images/assets/categories/1.png';
import img2 from '../../images/assets/categories/2.png';
import img3 from '../../images/assets/categories/3.png';
import img4 from '../../images/assets/categories/4.png';
import img5 from '../../images/assets/categories/5.png';
import img6 from '../../images/assets/categories/6.png';
import img7 from '../../images/assets/categories/7.png';
import img8 from '../../images/assets/categories/8.png';
import img9 from '../../images/assets/categories/9.png';
import img10 from '../../images/assets/categories/10.png';
import img11 from '../../images/assets/categories/11.png';
import img12 from '../../images/assets/categories/12.png';

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        background: '#d4d4d4',
        borderRadius: 50,
        height: 40,
        width: 40,
        paddingTop: 10,
        paddingLeft: 9,
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
      slidesToShow: 5,
      slidesToScroll: 3,
      nextArrow: <SampleArrow />,
      prevArrow: <SampleArrow />,
    };
    return (
      <Container>
        <div style={{ margin: 30 }}>
          <Slider {...settings}>
            <div>
              <h3>
                <img src={img1} alt="img1" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img2} alt="img2" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img3} alt="img3" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img4} alt="img4" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img5} alt="img4" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img6} alt="img4" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img7} alt="img4" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img8} alt="img4" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img9} alt="img4" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img10} alt="img4" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img11} alt="img4" style={{ width: 200 }} />
              </h3>
            </div>
            <div>
              <h3>
                <img src={img12} alt="img4" style={{ width: 200 }} />
              </h3>
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
