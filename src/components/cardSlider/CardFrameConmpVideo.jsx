import React from 'react'
import { Button } from "@mui/material";
// import imageSlider from '../cards/ImagesAllCard/hello-150x150.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const CardFrameConmp = ({video,title,paragraph}) => {
  return (
    <div style={{borderRadius:'15px',border:'1px solid #efefef'}}>
        <div style={{backgroundColor: 'white',
    borderRadius: '15px'}}>
            <div className="main-card-image">
                <div className="imkage-container">
                <video controls width='100%' height='100%' loop="true" style={{objectFit:'cover'}}>
  
      <source src={video} type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video>
                   </div>
            </div>
            <div className="text-div">
                <h2 className="text-div-h2">{title}</h2>
                <p id="rating-paragraph"><Stack spacing={1}><Rating name="size-large" defaultValue={5} size="large" /></Stack></p>
            </div>
            <div className="paragrapht">
                <p id="slider-paragrph">{paragraph}</p>
            </div>
            <div className="button-slider">
                <Button id="button-slider-button" href='https://www.trustpilot.com/review/bigwals.com'>View More</Button>
            </div>
          </div>
    </div>
  )
}

export default CardFrameConmp