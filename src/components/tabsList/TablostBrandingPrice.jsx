import * as React from 'react';
import './TabList.css'
import PricingBranding from '../pricingTablist/PricingBranding';
import PricingLogo from '../pricingTablist/PricingLogo';
import Taba from 'react-bootstrap/Tab';
import Tabsaa from 'react-bootstrap/Tabs';
function TabPanel() {


  return (
    <div className="tablisst">


<Tabsaa
      defaultActiveKey="Logo"
      transition={false}
      id="noanim-tab-example"
      className="mb-3-new"
    >
     
      <Taba eventKey="Logo" title="Logo">
      <PricingLogo/>
      </Taba>
      
      <Taba eventKey="Branding" title="Branding" >
      <PricingBranding />
      </Taba>
     
    </Tabsaa>
  

    </div>
  );
}
export default TabPanel