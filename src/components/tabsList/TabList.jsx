import * as React from 'react';
import './TabList.css'
import TwodAnimation from '../cards/TwodAnimation';
import CoursesCard from '../cards/CoursesCards';
import AllCardImgs from '../cards/AllCardImgs';
import BrandingTablist from '../cards/BrandingTablist';
import LogoImg from '../cards/LogoImg';
import Taba from 'react-bootstrap/Tab';
import Tabsaa from 'react-bootstrap/Tabs';
import NewImgaesportfolio from '../3dAnimation/newImgaesportfolio/NewImgaesportfolio';
function TabPanel() {


  return (
    <div className="tablisst">


<Tabsaa
      defaultActiveKey="all"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 newEdit"
    >
      <Taba  eventKey="all" title="All" >
      <AllCardImgs/>
      </Taba>
      <Taba eventKey="Logo" title="Logo">
      <LogoImg/>
      </Taba>
      <Taba eventKey="Website" title="Website" >
       <CoursesCard/>
      </Taba>
      <Taba eventKey="Branding" title="Branding" >
      <BrandingTablist/>
      </Taba>
      <Taba eventKey="2D Animation" title="2D Animation" >
      <TwodAnimation/>
      </Taba>
      <Taba eventKey="3D Animation" title="3D Animation" >
     <NewImgaesportfolio/>
      </Taba>
    </Tabsaa>
  
    </div>
  );
}
export default TabPanel