// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import ContentHome from './Component/Content_Home/Content_Home';
import ContentAbout from './Component/Content_About/Content_About'
import ContentKids from './Component/Content_Kids/ContentKids';
import Gallery from './Component/Content_Gallery/Content_Gallery';
import Form_Feedback from './Component/Form_Feedback/Form_Feedback';
import Contact from './Component/Contact/Contact';
import Detail_Product from './Component/Detail_Product/Detail_Product';
import Slider from './Component/Slider/Slider';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div >
       <BrowserRouter>
       <Header/>
       <Slider/>
          <Routes>
            <Route path={"/"} element={<ContentHome/>}/>
            <Route path={"/about"} element={<ContentAbout/>}/>
            <Route path={"/category/:idbrowser"} element={<ContentKids/>}/>
            <Route path={"/gallery"} element={<Gallery/>}/>
            <Route path= {'/detail-product/:id'} element={<Detail_Product/>}/>
            <Route path={"/feedback"} element={<Form_Feedback/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
          </Routes>
       <Footer/>
       </BrowserRouter>
      
      
    </div>
  );
}

export default App;
