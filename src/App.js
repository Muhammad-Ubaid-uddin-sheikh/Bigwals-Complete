import { BrowserRouter} from "react-router-dom"
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import Home from "./components/pages/Home";
import Media from "./components/pages/Media";
import PagenotFound from "./components/pages/PagenotFound";
import Footer from "./components/footer/Footer";
import BrandingBigwals from "./components/footer/BrandingBigwals";
import LogoBranding from "./components/pages/LogoBranding";
import DigitalMarketing from "./components/pages/DigitalMarketing";
import './App.css'
import Seo from "./components/seo/Seo";
import Header from "./components/layout/Header";
import Animationtod from './components/2dAnimation/2dAnimation'
import Animationthreed from './components/3dAnimation/3dAnimation'
import Application from "./components/application/Application";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import DigitalblogPage from "./components/blog/allWriteblogs/DigitalblogPage";
import SEOTracking from './SEOTracking';
import {  Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {

  

  return(
    <div className="fakeSnow">


      <SEOTracking />
  
    <BrowserRouter    >
    <Header/>
  
    <Routes>
      
      <Route exact path="/" element={<Home/>} />
      <Route path="/sitemap.xml" onEnter={() => { window.location.href = "/sitemap.xml" }} />
      <Route  exact path="/about" element={<About/>} />
      <Route  exact path="/blog/best-digital-marketing-agency-for-your-business" element={<DigitalblogPage/>} />
      <Route  exact path="/pricing" element={<Media/>} />
      <Route exact path="/web-design-and-development-services" element={<Courses/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/logo-designing-services" element={<LogoBranding/>} />
      <Route exact path="/2d-animation-services" element={<Animationtod/>} />
      <Route exact path="/3d-animation-services" element={< Animationthreed/>} />
      <Route exact path="/best-app-development-services" element={<Application/>} />
      <Route exact path="/portfolio" element={<Portfolio/>} />
      <Route exact path="/search-engine-optimization" element={<Seo/>} />
   
      <Route exact  path="/blog" element={<Blog/>} />
      <Route exact path="/digital-marketing-agency-usa" element={<DigitalMarketing/>} />
      
    
      <Route path="*" element={<PagenotFound/>} />
    </Routes>
    <Footer/>
    <BrandingBigwals/>
    </BrowserRouter>
    </div>
  )
}
export default App;
