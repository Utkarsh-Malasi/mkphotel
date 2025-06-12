import React, { useState, useEffect } from "react";
import logoImage from "./images/logo.png";
import './Header.css'; // Import the CSS file
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo-section">
          <div className={`header-logo-container ${scrolled ? 'header-logo-container-scrolled' : ''}`}>
            <img
              src={logoImage}
              alt="MKP Hotels Logo"
              className="header-logo-image"
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>
          <h1 className={`header-title ${scrolled ? 'header-title-scrolled' : ''}`}>
            <span style={{color: "#c8a97e"}}>MKP</span> Hotels
          </h1>
        </div>

        {/* Mobile menu button */}
        <div
          className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  const element = document.querySelector('#home');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              } else {
                const element = document.querySelector('#home');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
              setMenuOpen(false);
            }}
          >
            <i className="fas fa-home"></i>
            Home
            <span className="nav-underline"></span>
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== '/') {
                navigate('/');
                // Need to wait for navigation to complete before scrolling
                setTimeout(() => {
                  const element = document.querySelector('#about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
              setMenuOpen(false); // Close menu on click
            }}
          >
            <i className="fas fa-info-circle"></i>
            About
            <span className="nav-underline"></span>
          </a>
          <a
            href="#amenities"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  const element = document.querySelector('#amenities');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                const element = document.querySelector('#amenities');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
              setMenuOpen(false); // Close menu on click
            }}
          >
            <i className="fas fa-concierge-bell"></i>
            Services
            <span className="nav-underline"></span>
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  const element = document.querySelector('#gallery');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                const element = document.querySelector('#gallery');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
              setMenuOpen(false); // Close menu on click
            }}
          >
            <i className="fas fa-images"></i>
            Gallery
            <span className="nav-underline"></span>
          </a>
          <a
            href="#rooms"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  const element = document.querySelector('#rooms');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                const element = document.querySelector('#rooms');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
              setMenuOpen(false); // Close menu on click
            }}
          >
            <i className="fas fa-bed"></i>
            Rooms
            <span className="nav-underline"></span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
              setMenuOpen(false); // Close menu on click
            }}
          >
            <i className="fas fa-phone-alt"></i>
            Contact Us
            <span className="nav-underline"></span>
          </a>
        </nav>

        {/* Book Now Button */}
        <button className="book-now-button">
          <i className="fas fa-phone-alt"></i>
          Contact Us
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;