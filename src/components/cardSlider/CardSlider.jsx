import React, { Component } from "react";
import './CardSlider.css'
import Slider from "react-slick";
import CardFrameConmp from "./CardFrameConmp";
import imageSlider6 from './reviewsNEwnew1.jpeg'
import kenny from './reviewsNEwnew2.jpeg'
import alex from './reviewsNEwnew3.jpeg'
import Video from './video-bigwals.mp4'
import CardFrameConmpVideo from './CardFrameConmpVideo'
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="Main-div-CArd-sldier">
        <Slider {...settings}>
          <div  >
           <CardFrameConmpVideo video={Video} title='Jessika Cabrera' paragraph="I was in the need for a logo designed and Staci was amazing at making me feel comfortable and her work is amazing 🤩 I would definitely recommend her to anyone looking for graphic designs." />
          </div>
          <div >
          <CardFrameConmp img={kenny} title='Kenny' paragraph="I had a good experience. They were professional and responsive to feedback and changes to my request. Will be using them again." />
          </div>
          <div >
          <CardFrameConmp img='https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg' title='Flynn Russell' paragraph="Had an amazing experience working with the artist, worked very quick, great at listening and piece turned out great. " />
          </div>
          <div >
          <CardFrameConmp img={ alex} title='Alex' paragraph="I had requested a design to print on a banner and presented him with 2 options in the style i would like, David fused those 2 designs in one which made it look amazing and right what I wanted. Also the revisions went smooth and he knew exactly what to adjust and added his special touch to make it all more professional. I would recommend his services , plus a very friendly and flexible to your budget."  />
          </div>
          <div >
          <CardFrameConmp img='https://media.istockphoto.com/id/1372641621/photo/portrait-of-a-businessman-on-gray-background.jpg?s=170667a&w=0&k=20&c=ANVoOOlGwLyuBvB0g0uus58tTE_aPL-twwN2PSBJL54=' title='Rick Thibodeau' paragraph="Joseph was great with me and was able to get the design ideas out of my head and onto the the screen. After a couple of revisions we already had the 'big picture' done and after a few fast small ones we had our logo! It's crisp, clear, bright, and pops! Everyone we had shown it to was impressed. I'm glad I was able to work with him and 100% recommend going forward." />
          </div>
          <div >
          <CardFrameConmp img={imageSlider6} title='Shea' paragraph="The logo designer reached out to me after a general inquiry. He showed me examples of the work done by his company and offered to present me with 3 to 4 concepts of my vision. He was very open to my ideas and quickly presented revisions. He was able to produce a logo that I am very happy with." />
          </div>
        
        </Slider>
      </div>

      
    );
  }
}