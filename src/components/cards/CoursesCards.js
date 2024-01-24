import card from './ImagesAllCard/web.png'
import card1 from './ImagesAllCard/webiste2.jpg'
import card2 from './ImagesAllCard/webiste3.jpeg'
import card3 from './ImagesAllCard/webiste4.jpeg'
import card5 from './ImagesAllCard/webiste5.jpeg'
import card6 from './ImagesAllCard/webiste6.jpg'
import card10 from './ImagesAllCard/webiste7.jpeg'
import card11 from './ImagesAllCard/webistenew1.jpg'
import card12 from './ImagesAllCard/websitenew2.jpg'
import card13 from './ImagesAllCard/webistenew3.jpg'
import card15 from './ImagesAllCard/websitenew4.jpg'
import card14 from './ImagesAllCard/menu.png'
import card16 from './ImagesAllCard/websiteimage1.avif'
import card17 from './ImagesAllCard/websiteimage2.avif'
import card18 from './ImagesAllCard/websiteimage3.avif'
import card19 from './ImagesAllCard/websiteimage4.avif'
import MediaCard from './MediaCard'
import './AllStyle.css';
const Website = () => {

  return (
    <>
    <div className="main-media-div" >
    <MediaCard
    img1 = {card} 
    img2={card1}
    img3={card6}
    img4={card3}
    img5={card5}
    img6={card2}
    img7={card10}
    img8={card11}
    img9={card12}
    img10={card13}
    img11={card15}
    img12={card14}
    img13={card16}
    img14={card17}
    img15={card18}
    img16={card19}
    />

   </div>
    </>
    
  )
}

export default Website