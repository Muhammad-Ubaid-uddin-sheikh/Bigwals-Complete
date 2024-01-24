import React from 'react'

const AllColmFrontImg = ({logoBrandingLogo,firstpara,h1heading,againPara,AgainagianP,thirdPara}) => {
  return (
    <div className='main-caurosel-div'>
    <div className="row-carousle-main">
       <div className="colm-caurosel" id='padding-propeties-colm-courosel'><img src={logoBrandingLogo } alt='logo' width='100%' /></div>
       <div className="colm-caurosel"><p className='top-first-heading' style={{textAlign:'center'}}> {firstpara}</p><h1 style={{textAlign:'center'}} className='com-h1-webiste-sec' >{h1heading}</h1> <p className='paragrph-website-sec-p'>{againPara}</p><p className='paragrph-website-sec-p'> {AgainagianP}</p> <p className='paragrph-website-sec-p'> {thirdPara} </p></div>
    </div>
   </div>
  )
}

export default AllColmFrontImg