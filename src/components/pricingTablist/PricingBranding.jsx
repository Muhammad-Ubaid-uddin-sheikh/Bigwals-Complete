import React from 'react'
import './PricingTablist.css'
import PricingBox from '../pricingBox/PricingBox'
import PricingTagBox from '../pricingBox/PricingTagBox'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import 'aos/dist/aos.css'
const PricingBranding = () => {
  return (
    <div>
         <div className="main-tablist-pricing">
        <div className="row-pricing-tablsit"   data-aos ='fade-up'>
        <PricingBox  
        logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        // logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        // logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        // logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        // logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        // logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        // logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         MainLogoFirst={<PedalBikeIcon id='pedal-bike-pricing' />} 
         title='Basic Branding'
         price='$59.00'
         previousPrice='$100.00'
         category1= '- Business Card'
         category2= '- Letterheads'
         category3= '- Envelope'
         category4= '- 24-48 H Delivery'
        //  category4= ''
        //  category5= ''
        //  category6= ''
        //   category7= ''
        //    category8= ''
        //    category9= ''
        //    category10= '- JPG, PDF, PNG'

        />
        
        <PricingBox  
         logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        //  logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        //  logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        //  logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        //  logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        //  logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
          logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
          MainLogoFirst={<TwoWheelerIcon id='pedal-bike-pricing' />} 
          title='Startup Branding'
          price='$99.00'
          previousPrice='$159.00'
          category1= '- Business Card -Letterhead'
          category2= '- Envelope'
          category3= '- Email Signature'
          category4= '- 2 Social Covers'
          category5= '- 24-48 H Delivery'
          // category6= '- HQ PNG + JPEG'
          //  category7= '- 100% Ownership'
          //   category8= '- JPG, PDF, PNG'
          //   category9= '- JPG, PDF, PNG'
          //   category10= '- JPG, PDF, PNG'
             />
        <PricingTagBox 
        
        logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        // logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        // logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         MainLogoFirst={<BusinessCenterIcon id='pedal-bike-pricing' />} 
         title='Professional'
         price='$149.00'
         previousPrice='$219.00'
         category1= '- Business Card'
         category2= '- Letterhead'
         category3= '- Envelope'
         category4= '- 2 Social Covers'
         category5= '- T-Shirt'
          category6= '- Email Signature'
            category7= '- 24-48 H Delivery'
            category8= '- Web Banner'
            // category9= '- 100% OwnerShip'
            // category10= '- JPG, PDF, PNG , EPS'
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
          price='$199.00'
          previousPrice='$249.00'
          category1= '- Business Card'
          category2= '- Letterhead'
          category3= '- Envelope'
          category4= '- Email Signature'
          category5= '- 4 Social Covers'
          category6= '- T-Shirt'
           category7= '- Signage Design'
            category8= '- Car Stickers'
            category9= '- Web Banner'
            category10= '- HQ PNG + JPEG - 100% Ownership -JPG, PDF, PNG, EPS' 
            />
        </div>
       </div>
    </div>
  )
}

export default PricingBranding