
import './PricingBox.css'

const PricingBox = ({logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,MainLogoFirst,
    logo,title,price,previousPrice,category1,category2,category3,category4,category5,category6,category7,category8,category9,category10,category11,category12,category13,category14,category15,category16
}) => {
 
  return (
    <div className='PricingBox-main-div'> 
     <div className="row-procing-box">
        <div className="colm-pricing-box" id='new-colm-pricing-box'
      
        > 
                <div className="colm-main-pricing" id='colm-pricing-box-diffrent'
              
                >
                    {/* <h4 class="ribbon">Top Seller</h4> */}

                <div className="row-colm-main-pricing" id ="row-colm-main-edit-color">
               <div className="colm-pricing-inner-box"><div id='div-blank-padding'>
                {/* <h4 class="ribbon">Top  Seller</h4> */}
                <div id='div-sytyle-pricing-top' style={{TextShadow:'2px 2px 2px black',color:'white'}}>   {title}</div></div></div>  
               <div className="colm-pricing-inner-box"><small className='small-pricing' style={{color:'white'}}>Starting From</small><div className='pricinbg-page-box' style={{color:'white'}}>{price}
                {/* <small className='small-pricing'>/Only</small><small className='small-pricing-old'>{previousPrice}</small> */}
                 </div></div>
                </div>

<div className="ul-pakages-price">
    <ul className="pakagres-price">
        <li className="pakages"> {logo}
        {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
        {category1}</li>
        <li className="pakages">
        {logo1}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category2}</li>
        <li className="pakages">
        {logo2}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category3}</li>
        <li className="pakages">
        {logo3}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category4}</li>
        <li className="pakages">
        {logo4}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category5}</li>
        <li className="pakages">
        {logo5}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category6}</li>
        <li className="pakages">
        {logo6}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category7}</li>
        <li className="pakages">
        {logo7}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category8}</li>
        <li className="pakages">
        {logo8}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category9}</li>
        <li className="pakages">
        {logo9}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category10}</li>
            <li className="pakages">
        {logo10}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category11}</li>
            <li className="pakages">
        {logo11}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category12}</li>
            <li className="pakages">
        {logo12}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category13}</li>
            <li className="pakages">
        {logo13}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category14}</li>
            <li className="pakages">
        {logo14}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category15}</li>
            <li className="pakages">
        {logo15}
            {/* <CheckCircleIcon id='icon-checkcircle-price'/> */}
            {category16}</li>
    </ul>
</div>
<div className="third-div-prices-caa">
    <div className="third-row">
    <div className="thrd-colm-price"><button id='button-pricing-sec'>Get Started</button></div>
    </div>
</div>

            </div>


        </div>
     </div>
    </div>
  )
}

export default PricingBox