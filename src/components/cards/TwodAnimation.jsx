import card from './ImagesAllCard/2dImages.jpeg'
import card1 from './ImagesAllCard/2dImages1.jpeg'
import card2 from './ImagesAllCard/2dImages2.jpeg'
import card3 from './ImagesAllCard/2dImages3.jpeg'
import card5 from './ImagesAllCard/2dImages4.jpeg'
import card6 from './ImagesAllCard/2dImages5.jpeg'
import card10 from './ImagesAllCard/2dImages6.jpeg'
import card11 from './ImagesAllCard/2danimationnewdribble.png'
import card12 from './ImagesAllCard/2dImages8.png'
import card13 from './ImagesAllCard/2dImages9.png'
import card15 from './ImagesAllCard/2dmummydesign.jpg'
import card14 from './ImagesAllCard/2dImages11.jpeg'
import card16 from './ImagesAllCard/2danimationnewdribble2.jpg'
import card17 from './ImagesAllCard/2dImages13.png'
import card18 from './ImagesAllCard/2dImages14.jpeg'
import card19 from './ImagesAllCard/2dImages15.jpeg'
import MediaCard from './MediaCard'
import './AllStyle.css';

const twodAnimation = () => {
    return (
        <>
        <div className="main-media-div" >
        <MediaCard
        img1 = {card} 
        img2={card1}
        img3={card6}
        img4={card3}
        img5={card5}
        img6={card15}
        img7={card10}
        img8={card11}
        img9={card12}
        img10={card13}
        img11={card18}
        img12={card14}
        img13={card16}
        img14={card17}
        img15={card2}
        img16={card19}

        />
    
       </div>
        </>
        
      )
}

export default twodAnimation