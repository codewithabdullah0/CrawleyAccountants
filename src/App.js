import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import CalculateTax from "./Components/CalculateTax";
import Contact from './Components/Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import ScrollToTop from './Components/ScrollToTop' 
import PrivacyPolicy from "./Components/Privacy";




function App() {
  return (
    <div >
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>

        <Routes>

          <Route path="/" element={<Home></Home>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/calculatetax" element={<CalculateTax></CalculateTax>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>} />


        </Routes>

        <Footer></Footer>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
