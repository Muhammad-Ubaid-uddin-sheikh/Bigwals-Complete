import React from 'react'
import './PricingTablist.css'
import PricingBox from '../pricingBox/PricingBox'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import PricingTagBox from '../pricingBox/PricingTagBox'
// import Aos from 'aos';
import 'aos/dist/aos.css'
const PricingLogo = () => {
  return (
    <div>
        <div className="main-tablist-pricing">
        <div className="row-pricing-tablsit"   data-aos ='fade-up'>
        <PricingBox  
        logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         MainLogoFirst={<PedalBikeIcon id='pedal-bike-pricing' />} 
         title='Basic Logo'
         price='$99.00'
         previousPrice='$140.00'
         category1= '- 4 Logo Concepts'
         category2= '- 4 Revisions'
         category3= '- Custom Logo'
         category4= '- FREE Icon Design'
         category5= '- 48 hours Delivery'
         category6= '- Turn around time 24 Hours'
          category7= '- 100% Ownership'
           category8= '- Bussiness Card'
           category9= '- Letter Head'
           category10= '- JPG, PDF, PNG'

        />
        <PricingBox  
         logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
          logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
          MainLogoFirst={<TwoWheelerIcon id='pedal-bike-pricing' />} 
          title='Startup Logo'
          price='$199.00'
          previousPrice='$299.00'
          category1= '- 6 Logo Concepts'
          category2= '- 6 Revisions'
          category3= '- Custom Logo'
          category4= '- Vector PDF File'
          category5= '- 48 hours Delivery'
          category6= '- FREE Icon Design'
           category7= '- 100% Ownership'
            category8= '- JPG, PDF, PNG'
            category9= '- 100% Satisfaction Guarantee'
            category10= '1 Stationery Design Set'
             />
        <PricingTagBox
        
        logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo11= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo10= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         MainLogoFirst={<BusinessCenterIcon id='pedal-bike-pricing' />} 
         title='Professional'
         price='$299.00'
         previousPrice='$399.00'
         category1= '- 6 Logo Concepts'
         category2= '- 1 Stationery Design Set'
         category3= '- No High Res. files'
         category4= '- Custom Logo'
         category5= '- Vector EPS, PDF file'
          category6= '- Editable Vector AI'
            category7= '- 24-48 H Delivery'
            category8= '- HQ PNG + JPEG, EPS'
            category9= '- 100% OwnerShip'
            category10= ' Stationery' 
            category11= '- Letter Head'
            category12= '- Bussiness Card'
            />
            

        <PricingBox 
         logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
          logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
          MainLogoFirst={<CorporateFareIcon id='pedal-bike-pricing' />} 
          title='Corporate '
          price='$399.00'
          previousPrice='$499.00'
          category1= '- Unlimited Logo Concepts'
          category2= '- Unlimited Revisions'
          category3= '-  High Res. files'
          category4= '- Custom Logo'
          category5= '- 24-48H  Delivery'
          category6= '- FREE Unlimited Revisions'
           category7= '- 100% Ownership'
            category8= '- Editable Vector AI'
            category9= '- JPG, PDF, PNG , EPS , HQ '
            category10= '1 Stationery Design Set'
            />
        </div>
       </div>
    </div>
  )
}

export default PricingLogo