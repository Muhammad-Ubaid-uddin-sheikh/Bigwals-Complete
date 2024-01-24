import * as React from 'react';
import logonew1 from '../footer/conversation.png';
import './DropDownServices.css'
import lognonew2 from '../footer/location.png';
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const DropDOwn =()=>{
   
  return(
    
    <div>
      <ul style={{padding:'0px'}}>
        <li className='NavigationMenu'> <p className='paragrph-mint-lagde'> Services <ArrowDropDownIcon/></p>
        <div className="main-meu-drop-down-div">
          <div className='main0-send-drp-down'>
          <div className="com-main-more-drop">
            <p className="paragrph-tet-main-drop-dwon">ArtWorks</p>
          <ul className="inter-ul">
            <Link to={'/logo-designing-services'}><li className="iinter-menu-drop">Logo & Branding</li></Link>
            {/* <Link to={'/logo-designing-services'}> <li className="iinter-menu-drop"> </li></Link> */}
            <Link to={'/2d-animation-services'}><li className="iinter-menu-drop">2D Animation</li></Link>
            <Link to={'/3d-animation-services'}><li className="iinter-menu-drop">3D Animation</li></Link>
          </ul>
          </div>
          <div className="com-main-more-drop">
            <p className="paragrph-tet-main-drop-dwon">Tech Services</p>
          <ul className="inter-ul">
          <Link to={'/web-design-and-development-services'}><li className="iinter-menu-drop">Website</li></Link>
          <Link to={'/digital-marketing-agency-usa'}><li className="iinter-menu-drop">Digital Marketing</li></Link>
          <Link to={'/search-engine-optimization'}><li className="iinter-menu-drop">SEO</li></Link>
          <Link to={'/best-app-development-services'}><li className="iinter-menu-drop">Application</li></Link>  
          </ul>
          </div>
         
          <div className="com-main-more-drop">
            <p className="paragrph-tet-main-drop-dwon">Contact Us</p>
          <ul className="inter-ul">
            <li className="iinter-menu-drop"><div className="com-first-two-div" style={{width:'100%',justifyContent:'initial'}}><img src={logonew1} width="20%" alt="image" /> +1 9016467815 <br/></div></li>
            <li className="iinter-menu-drop"> support@bigwals.com</li>
            <li className="iinter-menu-drop"><div className="com-first-two-div" style={{width:'100%',justifyContent:'initial',alignItems:'flex-start'}}><img src={lognonew2} width="18%" alt="image" /> Winter Park, FL, USA  United States</div></li>
          </ul>
          </div>
          </div>

        </div>
        
        </li>
      </ul>
    </div>
  )
}


export default DropDOwn 