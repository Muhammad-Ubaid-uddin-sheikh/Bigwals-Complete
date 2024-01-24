import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import TextCarouselDiv from './TextCarouselDiv'
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
       <TextCarouselDiv paragraph ="Still undecided about building a website or improving the look of one you already have?
You need a responsive website design to promote your brand and develop a solid digital presence in this competitive economy, whether you operate a start-up or a major corporation.
Make sure you don't slip behind the competition. Utilize bespoke web design services to provide your target audience with the greatest possible online experience.." mainHading='Turn Clicks Into Customers'/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <TextCarouselDiv paragraph="The internet offers a goldmine of prospects for all types of enterprises globally. Use its strength to your advantage. With BigWals’ website design services, you may establish your digital presence and explore your potential market potential effectively and efficiently.
We provide everything from website design and development to search engine optimization (SEO) and site management" mainHading='Engaging, Purposeful & Creative'/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>  
      <TextCarouselDiv mainHading='Results-Oriented Website Solutions' paragraph="Are you looking for an affordable web design service?
BigWals is an award-winning web design agency with a team of digital designers who specialize in creating websites that:
top web design company Increase leads
business web design Drive sales growth
custom web design Lower marketing expenditures
web design company Set their businesses apart in the marketplace"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;