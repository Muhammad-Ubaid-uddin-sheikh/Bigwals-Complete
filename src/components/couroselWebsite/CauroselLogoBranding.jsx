import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../cards/ImagesAllCard/logonew1.webp'
import img2 from '../cards/ImagesAllCard/logonew10.webp'
import img3 from '../cards/ImagesAllCard/logonew12.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;