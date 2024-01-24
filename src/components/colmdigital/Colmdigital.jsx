import React from 'react'
import './Colmdigital.css'
const Colmdigital = ({img1,headingFirst,paragraph}) => {
  return (
    <div className="colm-digital-main" >
        <div className="image-main-digital"><img src={img1} alt="" width='100%' /></div>
        <div className="text-main-digatal">
        <h4 style={{textAlign:'center',fontSize:'23px'}} className='com-h1-webiste-sec'>{headingFirst}</h4>
        <p  className='paragrph-website-sec-p' style={{fontSize:'17px'}}>{paragraph}</p>
        </div>
    </div>
  )
}

export default Colmdigital