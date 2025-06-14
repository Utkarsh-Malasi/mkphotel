import React from "react";
import logoImage from "./images/logo.png";

const Footer = () => (
  <footer style={{
    background: "linear-gradient(135deg, #1c1c1c 0%, #2d2d2d 100%)", 
    padding: "2.5rem 0", 
    boxShadow: "0 -4px 20px rgba(0,0,0,0.1)", 
    marginTop: "2rem", 
    borderRadius: 0, 
    width: "100%",
    color: "#e0e0e0"
  }}>
    <div style={{
      width: "100%", 
      maxWidth: "1200px",
      margin: "0 auto", 
      display: "flex", 
      justifyContent: "space-between", 
      padding: "0 2vw", 
      flexWrap: "wrap",
      gap: "2rem"
    }}>
      {/* Column 1: Hotel Info */}
      <div style={{flex: "1 1 250px", textAlign: "left"}}>
        <div style={{display: "flex", alignItems: "center", marginBottom: "1rem"}}>
          <div style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            overflow: "hidden",
            marginRight: "15px",
            border: "2px solid #c8a97e",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
          }}>
            <img 
              src={logoImage} 
              alt="MKP Hotels Logo" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>
          <h3 style={{fontSize: "1.1rem", fontWeight: 600, color: "#fff", margin: 0}}>
            <span style={{color: "#c8a97e"}}>MKP</span> HOTELS
          </h3>
        </div>
        <p style={{fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "0.8rem"}}>
          Luxury accommodations with exceptional service and unforgettable experiences.
        </p>
        <div style={{fontSize: "0.8rem", marginTop: "1rem"}}>
          <div style={{display: "flex", alignItems: "center", marginBottom: "0.5rem"}}>
            <i className="fas fa-map-marker-alt" style={{marginRight: "0.5rem", fontSize: "0.75rem"}}></i>
            <span>63f Rajpur Road Dehradun-248001</span>
          </div>
          <div style={{display: "flex", alignItems: "center", marginBottom: "0.5rem"}}>
            <i className="fas fa-phone" style={{marginRight: "0.5rem", fontSize: "0.75rem"}}></i>
            <span>+91 9636211539</span>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <i className="fas fa-envelope" style={{marginRight: "0.5rem", fontSize: "0.75rem"}}></i>
            <span>mkphotelresort@gmail.com</span>
          </div>
        </div>
      </div>
      
      {/* Column 2: Quick Links */}
      <div style={{flex: "1 1 200px", textAlign: "left"}}>
        <h3 style={{fontSize: "0.95rem", fontWeight: 600, marginBottom: "1rem", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem"}}>
          QUICK LINKS
        </h3>
        <ul style={{listStyle: "none", padding: 0, margin: 0}}>
          <li style={{marginBottom: "0.5rem"}}>
            <a href="#" style={{color: "#e0e0e0", textDecoration: "none", fontSize: "0.8rem", display: "flex", alignItems: "center", transition: "all 0.2s ease"}} 
              onMouseOver={(e) => e.target.style.color = "#fff"} 
              onMouseOut={(e) => e.target.style.color = "#e0e0e0"}>
              <i className="fas fa-chevron-right" style={{fontSize: "0.6rem", marginRight: "0.5rem"}}></i> About Us
            </a>
          </li>
          <li style={{marginBottom: "0.5rem"}}>
            <a href="#rooms" style={{color: "#e0e0e0", textDecoration: "none", fontSize: "0.8rem", display: "flex", alignItems: "center", transition: "all 0.2s ease"}} 
              onMouseOver={(e) => e.target.style.color = "#fff"} 
              onMouseOut={(e) => e.target.style.color = "#e0e0e0"}>
              <i className="fas fa-chevron-right" style={{fontSize: "0.6rem", marginRight: "0.5rem"}}></i> Rooms & Suites
            </a>
          </li>
          <li style={{marginBottom: "0.5rem"}}>
            <a href="#" style={{color: "#e0e0e0", textDecoration: "none", fontSize: "0.8rem", display: "flex", alignItems: "center", transition: "all 0.2s ease"}} 
              onMouseOver={(e) => e.target.style.color = "#fff"} 
              onMouseOut={(e) => e.target.style.color = "#e0e0e0"}>
              <i className="fas fa-chevron-right" style={{fontSize: "0.6rem", marginRight: "0.5rem"}}></i> Dining
            </a>
          </li>
          <li style={{marginBottom: "0.5rem"}}>
            <a href="#" style={{color: "#e0e0e0", textDecoration: "none", fontSize: "0.8rem", display: "flex", alignItems: "center", transition: "all 0.2s ease"}} 
              onMouseOver={(e) => e.target.style.color = "#fff"} 
              onMouseOut={(e) => e.target.style.color = "#e0e0e0"}>
              <i className="fas fa-chevron-right" style={{fontSize: "0.6rem", marginRight: "0.5rem"}}></i> Spa & Wellness
            </a>
          </li>
        </ul>
      </div>
      
      {/* Column 3: Newsletter */}
      <div style={{flex: "1 1 250px", textAlign: "left"}}>
        <h3 style={{fontSize: "0.95rem", fontWeight: 600, marginBottom: "1rem", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem"}}>
          STAY CONNECTED
        </h3>
        <p style={{fontSize: "0.8rem", marginBottom: "1rem"}}>
          Subscribe to our newsletter for exclusive offers and updates.
        </p>
        <div style={{display: "flex", marginBottom: "1rem"}}>
          <input type="email" placeholder="Your email address" style={{
            flex: 1,
            padding: "0.5rem",
            fontSize: "0.75rem",
            border: "none",
            borderRadius: "3px 0 0 3px",
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "#fff"
          }} />
          <button style={{
            backgroundColor: "#c8a97e",
            color: "#fff",
            border: "none",
            padding: "0.5rem 0.75rem",
            fontSize: "0.75rem",
            borderRadius: "0 3px 3px 0",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#d4b68c"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#c8a97e"}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
        <div style={{display: "flex", gap: "1rem"}}>
          <a href="#" style={{color: "#e0e0e0", fontSize: "1rem", transition: "all 0.2s ease", display: "inline-block"}} 
            onMouseOver={(e) => {
              e.target.style.color = "#c8a97e";
              e.target.style.transform = "translateY(-2px)";
            }} 
            onMouseOut={(e) => {
              e.target.style.color = "#e0e0e0";
              e.target.style.transform = "translateY(0)";
            }}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" style={{color: "#e0e0e0", fontSize: "1rem", transition: "all 0.2s ease", display: "inline-block"}} 
            onMouseOver={(e) => {
              e.target.style.color = "#c8a97e";
              e.target.style.transform = "translateY(-2px)";
            }} 
            onMouseOut={(e) => {
              e.target.style.color = "#e0e0e0";
              e.target.style.transform = "translateY(0)";
            }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" style={{color: "#e0e0e0", fontSize: "1rem", transition: "all 0.2s ease", display: "inline-block"}} 
            onMouseOver={(e) => {
              e.target.style.color = "#c8a97e";
              e.target.style.transform = "translateY(-2px)";
            }} 
            onMouseOut={(e) => {
              e.target.style.color = "#e0e0e0";
              e.target.style.transform = "translateY(0)";
            }}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" style={{color: "#e0e0e0", fontSize: "1rem", transition: "all 0.2s ease", display: "inline-block"}} 
            onMouseOver={(e) => {
              e.target.style.color = "#c8a97e";
              e.target.style.transform = "translateY(-2px)";
            }} 
            onMouseOut={(e) => {
              e.target.style.color = "#e0e0e0";
              e.target.style.transform = "translateY(0)";
            }}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    
    {/* Bottom Copyright Bar */}
    <div style={{
      borderTop: "1px solid rgba(255,255,255,0.1)",
      marginTop: "2rem",
      paddingTop: "1.5rem",
      width: "100%",
      maxWidth: "1200px",
      margin: "2rem auto 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
      padding: "0 2vw",
      fontSize: "0.75rem"
    }}>
      <div>
        &copy; {new Date().getFullYear()} <span style={{fontWeight: 600}}>MKP Hotels</span>. All rights reserved.
      </div>
      <div style={{display: "flex", gap: "1.5rem"}}>
        <a href="#" style={{color: "#e0e0e0", textDecoration: "none", transition: "all 0.2s ease"}} 
          onMouseOver={(e) => e.target.style.color = "#fff"} 
          onMouseOut={(e) => e.target.style.color = "#e0e0e0"}>
          Privacy Policy
        </a>
        <a href="#" style={{color: "#e0e0e0", textDecoration: "none", transition: "all 0.2s ease"}} 
          onMouseOver={(e) => e.target.style.color = "#fff"} 
          onMouseOut={(e) => e.target.style.color = "#e0e0e0"}>
          Terms of Use
        </a>
        <a href="#" style={{color: "#e0e0e0", textDecoration: "none", transition: "all 0.2s ease"}} 
          onMouseOver={(e) => e.target.style.color = "#fff"} 
          onMouseOut={(e) => e.target.style.color = "#e0e0e0"}>
          Sitemap
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;