import React from 'react'

const AllColmFrontImgleft = ({logoBrandingLogo,firstpara,h1heading,againPara,AgainagianP,thirdPara,fourthPara,fifthPara,
    sixPara,sevenPara,eightPara,ninePara,tenPara,elevenPara}) => {
  return (
    <div className='main-caurosel-div' style={{marginTop:'40px'}}>
    <div className="row-carousle-main" >
       
      
       <div className="colm-caurosel"><p className='top-first-heading' style={{textAlign:'center'}}> {firstpara}</p><h1 style={{textAlign:'center'}} className='com-h1-webiste-sec' >{h1heading}</h1> <p className='paragrph-website-sec-p'>{againPara}</p><p className='paragrph-website-sec-p'> {AgainagianP}</p>
        <p className='paragrph-website-sec-p'> {thirdPara} </p>
        <p className='paragrph-website-sec-p'> {fourthPara} </p>
        <p className='paragrph-website-sec-p'> {fifthPara} </p>
        <p className='paragrph-website-sec-p'> {sixPara} </p>
        <p className='paragrph-website-sec-p'> {sevenPara} </p>
        <p className='paragrph-website-sec-p'> {eightPara} </p>
        <p className='paragrph-website-sec-p'> {ninePara} </p>
        <p className='paragrph-website-sec-p'> {tenPara} </p>
        <p className='paragrph-website-sec-p'> {elevenPara} </p>
        </div>
       <div className="colm-caurosel" id='padding-id'><img src={logoBrandingLogo } alt='logo' width='100%' /></div>
    </div>
   </div>
  )
}

export default AllColmFrontImgleft