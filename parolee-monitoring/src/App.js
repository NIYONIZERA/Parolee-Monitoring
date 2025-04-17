
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutUsSection from './components/AboutUsSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <AboutUsSection/>
      <ContactUsSection/>
      <Footer/>

    </div>
  );
}

export default App;
