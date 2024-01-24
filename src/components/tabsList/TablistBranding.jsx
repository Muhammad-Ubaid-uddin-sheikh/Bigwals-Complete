import * as React from 'react';
import './TabList.css'
import BrandingTablist from '../cards/BrandingTablist';
import LogoImg from '../cards/LogoImg';
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
      <LogoImg/>
      </Taba>
      
      <Taba eventKey="Branding" title="Branding" >
      <BrandingTablist/>
      </Taba>
     
    </Tabsaa>
  

    </div>
  );
}
export default TabPanel