import React from 'react';
import exe1 from "/src/components/images/home.jpg";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div id="home" style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
      {/* Placeholder for the hotel room image */}
      <img 
        src={exe1}
        alt="Hotel Room" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Overlay for ad line and buttons */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        zIndex: 1,
      }}>
        <h2 style={{ 
          color: 'white',
          textShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'white'
        }}>Experience the charm of Mussoorie at our exquisite hotel.</h2>
        <div style={{ marginTop: '20px' }}>
          <a href="tel:+919910597907">
            <button style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Call</button>
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
             <button style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
            <i className="fas fa-bed"></i>
            Rooms
            <span className="nav-underline"></span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;