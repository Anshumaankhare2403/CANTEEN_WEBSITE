import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
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

import { Fab, Tooltip } from '@mui/material';
// import NavigationIcon from '@mui/icons-material/Navigation';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
        <Route path="services" element={<Client />} />
        <Route path="working" element={<Working />} />
        <Route path="manufacturing" element={<Manufacturing />} />
        <Route path="education" element={<Education />} />
        <Route path="eventspace" element={<Eventspace />} />
        <Route path="corporate" element={<Corporate />} />
      </Routes>

      {/* Floating Back to Top Button */}
      {/* <Fab
        variant="extended"
        color="red"
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          zIndex: 1000,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        Back to Top
      </Fab> */}

      {/* Floating Social Media Buttons in One Line */}
      <div
        style={{
          position: 'fixed',
          top: '50%', // Position in the center vertically
          left: '20px', // Position on the left side
          transform: 'translateY(-50%)', // Adjust to perfectly center vertically
          display: 'flex',
          flexDirection: 'column', // Arrange items vertically
          alignItems: 'center', // Center items horizontally
          gap: '10px', // Space between icons
          zIndex: 1000,
        }}
      >
        <Tooltip title="Facebook">
          <Fab
            size="medium"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#F5EEDC', // Custom Facebook blue
              color: 'black', // Icon color
              '&:hover': {
                backgroundColor: '#C0D8C0', // Darker shade on hover
              },
            }}
          >
            <FacebookIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Twitter">
          <Fab
            size="medium"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#F5EEDC', // Custom Facebook blue
              color: 'black', // Icon color
              '&:hover': {
                backgroundColor: '#C0D8C0', // Darker shade on hover
              },
            }}
          >
            <TwitterIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <Fab
            size="medium"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#F5EEDC', // Custom Facebook blue
              color: 'black', // Icon color
              '&:hover': {
                backgroundColor: '#C0D8C0', // Darker shade on hover
              },
            }}
          >
            <LinkedInIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="WhatsAppIcon">
          <Fab
            size="medium"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#F5EEDC', // Custom Facebook blue
              color: 'black', // Icon color
              '&:hover': {
                backgroundColor: '#C0D8C0', // Darker shade on hover
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
