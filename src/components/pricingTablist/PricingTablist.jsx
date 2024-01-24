import * as React from 'react';
import './PricingTablist.css'
import 'aos/dist/aos.css'
import PricingLogo from './PricingLogo';
import PricingBranding from './PricingBranding';
import PricingWebsite from './PricingWebsite';
import Pricing2DAnimation from './Pricing2DAnimation';
import Pricing3DAnimation from './Pricing3DAnimation';
import Taba from 'react-bootstrap/Tab';
import Tabsaa from 'react-bootstrap/Tabs';

function TabPanel(props) {
  return (
    <div className="tablisst">


<Tabsaa
      defaultActiveKey="Logo"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
     
      <Taba eventKey="Logo" title="Logo">
      <PricingLogo/>
      </Taba>
      <Taba eventKey="Website" title="Website" >
       <PricingWebsite/>
      </Taba>
      <Taba eventKey="Branding" title="Branding" >
      <PricingBranding />
      </Taba>
      <Taba eventKey="2D Animation" title="2D Animation" >
      <Pricing2DAnimation/>
      </Taba>
      <Taba eventKey="3D Animation" title="3D Animation" >
      <Pricing3DAnimation/>
      </Taba>
    </Tabsaa>
    </div>
  );
}
export default TabPanel