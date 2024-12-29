import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
// import Testimonials from './components/Testimonials.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Client from './pages/Client.js';
import Working from './pages/Working.js';
import Manufacturing from './pages/Manufacturing.js';
import Education from './pages/Education.js';
import Eventspace from './pages/EventSpaces.js';
import Corporate from './pages/Corporate.js';

import Nav from './layouts/Nav.js';
import Footer from './layouts/Footer.js';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen.js';

// import { Fab } from '@mui/material';
// import NavigationIcon from '@mui/icons-material/Navigation';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the splash screen for 3 seconds on initial load
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path="Testimonials" element={<Testimonials />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Client />} />
        <Route path="working" element={<Working />} />
        <Route path="manufacturing" element={<Manufacturing />} />
        <Route path="education" element={<Education />} />
        <Route path="eventspace" element={<Eventspace />} />
        <Route path="corporate" element={<Corporate />} />
      </Routes>
      {/* <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
