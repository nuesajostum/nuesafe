import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from './Pages/Home/home';
import Overview from './Pages/AboutUs/Overview';
import Constitution from "./Pages/AboutUs/Constitution";
import News from './Pages/News/news';
import Contact from './Pages/Contact/contact';
import Footer from './components/Footer/footer';
import LoginForm from './components/Login/login.tsx';
import SignupForm from './components/Signup/signup.tsx';
import Dues from "./Pages/Dues/dues.tsx";
import Donation from "./Pages/Donation/donation";
import Mission from "./Pages/AboutUs/mission";
import Alumni from './Pages/Alumni/alumni';
import News1 from "./Pages/News/News1";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  useEffect(() => {
    AOS.init(
      {
        offset: 300,
        duration: 1400,
      }
    );
  }, [])
  return (
    <div className="App">
       
      <Router>
        <Navbar />
          <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="Overview" exact element={<Overview />} />
          <Route path="Constitution" exact element={<Constitution />} />
          <Route path="News" exact element={<News />} />
          <Route path="Contact" exact element={<Contact />} />
          <Route path="Login" exact element={<LoginForm />} />
          <Route path="Signup" exact element={<SignupForm />} />
          <Route path="Alumni Registration" exact element={<Alumni />} />
          <Route path="Make-a-donation" exact element={<Donation />} />
          <Route path="mission-and-core-values" exact element={<Mission />} />
          <Route path="Dues-payment" exact element={<Dues />} />
          <Route path="News1" exact element={<News1 />} />

          </Routes>
        

        <Footer/>
      </Router>

    </div> 
  );
}

export default App;


