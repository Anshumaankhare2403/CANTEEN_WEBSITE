import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Working from './pages/Working.js';
import Manufacturing from './pages/Manufacturing.js';
import Education from './pages/Education.js';
import Eventspace from './pages/EventSpaces.js';
import Corporate from './pages/Corporate.js';

import Nav from './layouts/Nav.js';
import Footer from './layouts/Footer.js';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen.js';

import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
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
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="working" element={<Working />} />
        <Route path="manufacturing" element={<Manufacturing />} />
        <Route path="education" element={<Education />} />
        <Route path="eventspace" element={<Eventspace />} />
        <Route path="corporate" element={<Corporate />} />
      </Routes>

      {/* Floating Social Media Button at the Right Bottom */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px', // Position at the bottom of the screen
          right: '20px', // Position on the right side
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          zIndex: 1000,
        }}
      >
        <Tooltip title="WhatsApp">
          <Fab
            size="medium"
            href="https://wa.me/1234567890" // Change to your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#25D366', // WhatsApp green
              color: 'white', // Icon color
              '&:hover': {
                backgroundColor: '#128C7E', // Darker shade on hover
              },
            }}
          >
            <WhatsAppIcon />
          </Fab>
        </Tooltip>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
