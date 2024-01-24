import React from 'react'
import CauroselWebsite from './CauroselWebsite'
import './CaurselWebsite.css'
import CauroselText from './CauroselText'
const MainCarousel = () => {
  return (
    <div className='main-caurosel-div'>
     <div className="row-carousle-main" style={{alignItems:'center'}}>
        <div className="colm-caurosel"><CauroselWebsite/></div>
        <div className="colm-caurosel"><CauroselText  /></div>
     </div>
    </div>
  )
}

export default MainCarousel