import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../cards/ImagesAllCard/3d-slider-image.jpg'
import img2 from '../cards/ImagesAllCard/3d-slider-image2.avif'
import img3 from '../cards/ImagesAllCard/3d-slider-image3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
const Caurosel3dAnimation = () => {
  return (
    <div>
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
    </div>
  )
}

export default Caurosel3dAnimation