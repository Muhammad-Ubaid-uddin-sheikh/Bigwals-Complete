import {  Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logopng from './logo.png'
import Logonew from './Bigwals Logo White.png'
import '../../styles/HeaderStyle.css'
// import SearchIcon from '@mui/icons-material/Search';
import Close from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import DropDownServices from '../dropDownServices/DropDownServices'
import CallIcon from '@mui/icons-material/Call';
const Header=()=>{
  const [activeMenuItem, setActiveMenuItem] = useState('Home');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  
  const [newNav , setNavbar] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false);
const chnagebk = ()=>{
  if(window.scrollY >= 80){
    setNavbar(true) 
  }else{
    setNavbar(false)
  }
}
window.addEventListener('scroll', chnagebk);
  const handleDrawerToggle = ()=>{setMobileOpen(!mobileOpen)};
  const drawer=(
  <Box onClick={handleDrawerToggle}sx={{textAlign:'center',height:'100vh',width:"450px"}}>
            <Typography sx={{flexGrow: 1 , display:'flex'}}>
        </Typography>
        <div className='menu-mobile-div' style={{width: '100%'}}>
        <div className='menu-mobile-div-row'>
        <div className='menu-mobile-div-colm'>
          <div className='search-icon-row' style={{display:'flex',justifyContent:'space-between',padding:'40px 25px 10px 25px',}}>
          <div className='menu-icons-search'><Close/></div>
          <div className='menu-icons-search'><a href="tel: (901)646-7815" style={{color: 'black',textDecoration: 'none'}}><CallIcon style={{background:'#7028e4',color:'white'}} className='iconPhone' /></a></div>
          
          </div>
        <ul className='Mobile-NavigationMenu'>
          <li id='links-color'><NavLink className={`menu-item ${activeMenuItem === 'Home' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Home')} to={'/'}>Home</NavLink></li>
          {/* <li id='links-color'><DropDownServices/></li> */}
            {/* <li id='links-color'><Link to={'/Website'}>Services</Link></li> */}
           
            <li id='links-color'><NavLink className={`menu-item ${activeMenuItem === 'Logo ' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Logo ')}  to={'/logo-designing-services'}>Logo & Branding</NavLink></li>
            <li id='links-color'><Link className={`menu-item ${activeMenuItem === 'Website' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Website')} to={'/web-design-and-development-services'} >Website </Link></li>
            <li id='links-color'><Link className={`menu-item ${activeMenuItem === '2D Animation' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('2D Animation')}to={'/2d-animation-services'} >2D Animation</Link></li>
            <li id='links-color'><Link className={`menu-item ${activeMenuItem === '3D Animation' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('3D Animation')} to={'/3d-animation-services'} >3D Animation</Link></li>
            <li id='links-color'><Link className={`menu-item ${activeMenuItem === 'Seo' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Seo')} to={'/search-engine-optimization'} >Seo</Link></li>
            <li id='links-color'><Link className={`menu-item ${activeMenuItem === 'Digital Marketing' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Digital Marketing')} to={'/digital-marketing-agency-usa'}>Digital Marketing</Link></li>
                        <li id='links-color'><Link className={`menu-item ${activeMenuItem === 'application' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Application')} to={'/best-app-development-services'}>Application</Link></li>
                        {/* <li id='links-color'><DropDownServices/></li> */}
            <li id='links-color'><Link className={`menu-item ${activeMenuItem === 'pricing' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Pricing')} to={'/pricing'}>Pricing</Link></li>
            <li id='links-color'><Link className={`menu-item ${activeMenuItem === 'portfolio' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Portfolio')} to={'/portfolio'}>Portfolio</Link></li>

            <li id='links-color'><Link className={`menu-item ${activeMenuItem === 'aboutHome' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('About')} to={'/about'}>About</Link></li>
            <li id='links-color'><Link className={`menu-item ${activeMenuItem === 'contact Us' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Contact Us')} to={'/contact'}>Contact Us</Link></li>
            {/* <li id='links-color'><Link to={'/seo'}>Seo</Link></li> */}
            <li id='links-color'><Link className={`menu-item ${activeMenuItem === 'blog' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Blog')} to={'/blog'}>Blog</Link></li>
            </ul>
        </div>
        <div className='menu-mobile-div-colm-2'></div>
          </div>
          </div>
  </Box>)
  return(
    <>
   <Box >
    <header className={newNav ? 'header-style-new active' : "header-style-new" }  componet={'nav'} sx={{background:'white',justifyContent:'center',display:'flex',height:'12vh',borderBottom: "1.5px solid rgba(150, 144, 162, 0.15)",boxShadow:'none'}} >
      <Toolbar>
        <IconButton aria-label='open drawer' edge='start' sx={{margin:2,display:{sm:'none'},}}  onClick={handleDrawerToggle} ><MenuIcon id='menu-hamburger'/></IconButton>
        <Typography sx={{flexGrow: 1 , display:'flex'}}>
       <div className='mneu-hamburger-res' style={{width:'18%'}}><NavLink to={'/'}> <img width={'100%'} src={newNav ? Logonew : Logopng } alt="Bigwals Logo"/></NavLink></div>
        </Typography>
        <div id="div-hamburger-icon-width-prop">
        <Box sx={{display:{xs:'none',sm:'block'}}}>
          <ul className='NavigationMenu'>
            <li id='links-color'><NavLink   className={`menu-item ${activeMenuItem === 'Home' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Home')} to={'/'}>Home</NavLink></li>
            <li id='links-color'><DropDownServices/></li>
            <li id='links-color'><NavLink   className={`menu-item ${activeMenuItem === 'Pricing' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Pricing')} to={'pricing'}>Pricing</NavLink></li>
            <li id='links-color'><Link  className={`menu-item ${activeMenuItem === 'Portfolio' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Portfolio')} to={'/portfolio'}>Portfolio</Link></li>
            <li id='links-color'><Link  className={`menu-item ${activeMenuItem === 'About' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('About')}  to={'/about'}>About</Link></li>
            <li id='links-color'><Link  className={`menu-item ${activeMenuItem === 'Contact Us' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Contact Us')} to={'/contact'}> Contact Us</Link></li>
            {/* <li id='links-color'><NewDropDown/></li> */}
            <li id='links-color'><Link  className={`menu-item ${activeMenuItem === 'Blog' ? 'active' : ''}`}
          onClick={() => handleMenuItemClick('Blog')} to={'/blog'}>Blog</Link></li>
        
          </ul>
         
        </Box>
        </div>
        <div className='icon' style={{display:'flex',justifyContent:'center'}}> <a href="tel: (901)646-7815" style={{color: 'black',textDecoration: 'none'}}><CallIcon className='iconPhone' style={{background:'#7028e4',color:'white'}} /></a> </div>
        </Toolbar>
    </header>
    <Box componet='nav'>
      <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'},"&.MuiDrawer-paper":{boxSizing:'border-box',width:'240px',}}}>{drawer}</Drawer>
    </Box>
   </Box>
    </>
  )
  
}
export default Header
