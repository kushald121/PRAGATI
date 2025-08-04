import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import './styles/About.css';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default App;