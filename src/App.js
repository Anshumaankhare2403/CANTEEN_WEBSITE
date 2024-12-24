import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Testimonials from './components/Testimonials.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Client from './pages/Client.js';
import Working from './pages/Working.js';
import Manufacturing from './pages/Manufacturing.js';
import Education from './pages/Education.js';
import Eventspace from './pages/EventSpaces.js';
import Corporate from './pages/Corporate.js';
// import Socialicon from './components/SocialIcon.js';

import Nav from './layouts/Nav.js';
import Footer from './layouts/Footer.js';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="Testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Client />} />
        <Route path="working" element={<Working />} />
        <Route path="manufacturing" element={<Manufacturing />} />
        <Route path="education" element={<Education />} />
        <Route path="eventspace" element={<Eventspace />} />
        <Route path="corporate" element={<Corporate />} />
        {/* <Route path="career" element={<Career />} /> */}
      </Routes>
      {/* <Socialicon /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
