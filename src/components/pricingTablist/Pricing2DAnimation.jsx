import React from 'react'
import './PricingTablist.css'
import PricingBox from '../pricingBox/PricingBox'
import PricingTagBox from '../pricingBox/PricingTagBox'
// import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import 'aos/dist/aos.css'

const Pricing2DAnimation = () => {
    return (
        <div>
             <div className="main-tablist-pricing">
            <div className="row-pricing-tablsit"   data-aos ='fade-up'>
            <PricingBox  
            logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
            logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
            logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
            logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
            // logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
            // logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
            // logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
            // logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
            // logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             MainLogoFirst={<PedalBikeIcon id='pedal-bike-pricing' />} 
             title='2D Design/Character'
             price='$369.00'
             previousPrice='$150.00'
             category5= '- Business Card'
             category2= '- Letterheads'
             category3= '- Envelope'
             category4= '- 24-48 H Delivery'
             category1= '15 Second'
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
             logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo10= {<CheckCircleIcon id='icon-checkcircle-price'/>}
              logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
              MainLogoFirst={<TwoWheelerIcon id='pedal-bike-pricing' />} 
              title='2D Whiteboard Animation'
              price='$399.00'
              previousPrice='$159.00'
              category1= '- 30 Second'
              category2= '- Professional Script Writing'
              category3= '- Voiceover'
              category4= '- Multiple Accents'
              category5= '- Finalized & Published'
              category6= '-  Animation With Sound '
               category7= '- Story Board'
                category8= '- 100% Ownership '
                category9= '-  Satisfaction Guarantee 100%'
                category10= '-limited Revisions 100%'
                category11= '-Effects 30 Days Delivery'
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
             logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo10= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             
             MainLogoFirst={<BusinessCenterIcon id='pedal-bike-pricing' />} 
             title='Custom 2D Animation'
             price='$499.00'
             previousPrice='$219.00'
             category1= '- 60 Second'
             category2= '- Letterhead'
             category3= '- Voiceover'
             category4= '- Finalized & Published'
             category5= '- 15 Days Delivery'
  
             category6= '- Storyboard & Characters  '
              category7= '- Animation With Sound'
               category8= '- Unlimited Revisions 100% '
               category9= '- Satisfaction Guarantee 100% '
               category10= '- 100% Ownership'
               category11= '- Money Back Guarantee*'
                />
    
    
            <PricingBox 
             logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             // logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             // logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             // logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
             // logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
              logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
              MainLogoFirst={<BusinessCenterIcon id='pedal-bike-pricing' />} 
              title=' Motion Graphics'
              price='$370.00'
              previousPrice='$219.00'
              category6= '- Storyboard & Characters'
              category2= '- Letterhead'
              category3= '- Voiceover'
              category4= '- Finalized & Published'
              category5= '-  Script'
              category1= '15 Second'
                />
            </div>
           </div>
        </div>
      )
}

export default Pricing2DAnimation