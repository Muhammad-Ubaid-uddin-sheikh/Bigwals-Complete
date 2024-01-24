import React from 'react'
import card from './ImagesAllCard/bg2.jpg'
import card7 from './ImagesAllCard/logonew2.webp'
import card1 from './ImagesAllCard/logonew13.webp'
import card2 from './ImagesAllCard/logonew12.webp'
import card3 from './ImagesAllCard/logonew1.webp'
import card4 from './ImagesAllCard/logonew4.webp'
import card5 from './ImagesAllCard/logonew5.webp'
import card6 from './ImagesAllCard/logonew6.webp'
import card8 from './ImagesAllCard/logonew7webp.webp'
import card10 from './ImagesAllCard/logonew8.webp'
import card12 from './ImagesAllCard/logonew9.webp'
import card13 from './ImagesAllCard/logonew14.webp'
import card14 from './ImagesAllCard/logonew11.webp'
import card15 from './ImagesAllCard/logosnew.webp'
import card16 from './ImagesAllCard/logonew3.webp'
import card17 from './ImagesAllCard/logonew2.webp'
import MediaCard from './MediaCard'
import './AllStyle.css';
const BrandingImg = () => {
  return (
    <div><MediaCard 
    img1 = {card} 
    img2={card1}
    img3={card2}
    img4={card3}
    img5={card4}
    img6={card5}
    img7={card6}
    img8={card7}
    img9={card8}
    img10={card10}
    img11={card12}
    img12={card13}
    img13={card14}
    img14={card15}
    img15={card16}
    img16={card17} 
    /></div>
  )
}

export default BrandingImg