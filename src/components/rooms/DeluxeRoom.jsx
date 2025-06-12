import React from "react";
import { Link } from "react-router-dom";
import deluxe1 from "../images/deluxe1.avif";
import deluxe2 from "../images/deluxe2.jpg";
import deluxe3 from "../images/deluxe3.avif";
import deluxe4 from "../images/deluxe4.avif";
import executive1 from "../images/executive1.avif";
import family1 from "../images/family1.jpg";

const roomImages = [
  deluxe1,
  deluxe2,
  deluxe3,
  deluxe4
];

const amenities = [
  { name: "Free Wi-Fi", icon: "fas fa-wifi" },
  { name: "Air Conditioning", icon: "fas fa-snowflake" },
  { name: "Smart TV", icon: "fas fa-tv" },
  { name: "Mini Bar", icon: "fas fa-glass-martini-alt" },
  { name: "Room Service", icon: "fas fa-concierge-bell" },
  { name: "King Size Bed", icon: "fas fa-bed" },
  { name: "City View", icon: "fas fa-city" },
  { name: "Work Desk", icon: "fas fa-desk" },
  { name: "Safe", icon: "fas fa-lock" },
  { name: "Rainfall Shower", icon: "fas fa-shower" },
  { name: "Bathrobe & Slippers", icon: "fas fa-socks" },
  { name: "Premium Toiletries", icon: "fas fa-pump-soap" }
];

const DeluxeRoom = () => {
  const [activeImage, setActiveImage] = React.useState(0);

  return (
    <section style={{
      background: "linear-gradient(135deg, #f5fafd 0%, #e6f2ff 100%)", // Light blue gradient
      padding: "3.5rem 0", 
      borderRadius: "0", 
      margin: "1.5rem 0", 
      width: "100%"
    }}>
      <div style={{width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 2vw"}}>
        {/* Breadcrumb Navigation */}
        <div style={{marginBottom: "1.5rem", display: "flex", alignItems: "center"}}>
          <Link to="/" style={{color: "#666", fontSize: "0.85rem", textDecoration: "none"}}>
            Home
          </Link>
          <span style={{margin: "0 0.5rem", color: "#999", fontSize: "0.85rem"}}>/</span>
          <Link to="/#rooms" style={{color: "#666", fontSize: "0.85rem", textDecoration: "none"}}>
            Rooms
          </Link>
          <span style={{margin: "0 0.5rem", color: "#999", fontSize: "0.85rem"}}>/</span>
          <span style={{color: "#6a9bd8", fontSize: "0.85rem", fontWeight: 500}}>Deluxe Room</span>
        </div>
        
        <div style={{display: "grid", gridTemplateColumns: "1fr", gap: "2rem"}}>
          {/* Room Gallery */}
          <div style={{background: "#fff", borderRadius: "4px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", overflow: "hidden"}}>
            <div style={{position: "relative", height: "400px", overflow: "hidden"}}>
              {roomImages.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Deluxe Room View ${idx+1}`} 
                  style={{
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: activeImage === idx ? 1 : 0,
                    transition: "opacity 0.5s ease"
                  }}
                />
              ))}
              
              {/* Navigation Arrows */}
              <div style={{position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", zIndex: 2}}>
                <button 
                  onClick={() => setActiveImage(prev => (prev === 0 ? roomImages.length - 1 : prev - 1))}
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                  }}
                >
                  <i className="fas fa-chevron-left" style={{color: "#333"}}></i>
                </button>
              </div>
              <div style={{position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", zIndex: 2}}>
                <button 
                  onClick={() => setActiveImage(prev => (prev === roomImages.length - 1 ? 0 : prev + 1))}
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                  }}
                >
                  <i className="fas fa-chevron-right" style={{color: "#333"}}></i>
                </button>
              </div>
              
              {/* Thumbnail Navigation */}
              <div style={{position: "absolute", bottom: "15px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px", zIndex: 2}}>
                {roomImages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: activeImage === idx ? "#6a9bd8" : "rgba(255,255,255,0.7)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail Strip */}
            <div style={{display: "flex", padding: "10px", gap: "10px", background: "#f8f9fa"}}>
              {roomImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  style={{
                    width: "80px",
                    height: "60px",
                    overflow: "hidden",
                    borderRadius: "3px",
                    cursor: "pointer",
                    border: activeImage === idx ? "2px solid #6a9bd8" : "2px solid transparent",
                    transition: "all 0.3s ease"
                  }}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${idx+1}`} 
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
              ))}
            </div>
          </div>
          
          {/* Room Details */}
          <div style={{display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem"}}>
            {/* Left Column - Description */}
            <div style={{background: "#fff", borderRadius: "4px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", padding: "1.5rem"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem"}}>
                <h2 style={{color: "#333", fontSize: "1.5rem", fontWeight: 600, margin: 0}}>Deluxe Room</h2>
                <div style={{background: "rgba(106, 155, 216, 0.1)", padding: "0.4rem 0.8rem", borderRadius: "3px"}}>
                  <span style={{color: "#6a9bd8", fontWeight: 600, fontSize: "1.2rem"}}> ₹4000- ₹5000</span>
                  <span style={{color: "#666", fontSize: "0.8rem"}}> / night</span>
                </div>
              </div>
              
              <div style={{borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "1rem", marginBottom: "1rem"}}>
                <div style={{display: "flex", gap: "1rem", color: "#666", fontSize: "0.85rem"}}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <i className="fas fa-ruler-combined" style={{marginRight: "0.4rem", color: "#6a9bd8"}}></i>
                    <span>40 m²</span>
                  </div>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <i className="fas fa-user-friends" style={{marginRight: "0.4rem", color: "#6a9bd8"}}></i>
                    <span>2 Guests</span>
                  </div>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <i className="fas fa-bed" style={{marginRight: "0.4rem", color: "#6a9bd8"}}></i>
                    <span>King Bed</span>
                  </div>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <i className="fas fa-mountain" style={{marginRight: "0.4rem", color: "#6a9bd8"}}></i>
                    <span>City View</span>
                  </div>
                </div>
              </div>
              
              <h3 style={{color: "#333", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.8rem"}}>Room Description</h3>
              <p style={{color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem"}}>
                Our spacious Deluxe Room offers the perfect blend of comfort and sophistication. Featuring a plush king-size bed with premium linens, this elegantly appointed room provides a peaceful retreat after a day of exploration or business.
              </p>
              <p style={{color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem"}}>
                Floor-to-ceiling windows offer breathtaking views of the city skyline, while the modern bathroom features a rainfall shower and premium toiletries. The room is equipped with state-of-the-art technology, including a Smart TV and high-speed Wi-Fi, ensuring both comfort and convenience throughout your stay.
              </p>
              <p style={{color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem"}}>
                Guests in our Deluxe Room enjoy access to the hotel's fitness center, indoor pool, and exclusive lounge areas. With 24-hour room service and a dedicated concierge, we ensure that your every need is met with the utmost attention to detail.
              </p>
              
              <h3 style={{color: "#333", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.8rem"}}>Room Amenities</h3>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.8rem"}}>
                {amenities.map((amenity, idx) => (
                  <div key={idx} style={{display: "flex", alignItems: "center"}}>
                    <div style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "rgba(106, 155, 216, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "0.6rem"
                    }}>
                      <i className={amenity.icon} style={{color: "#6a9bd8", fontSize: "0.8rem"}}></i>
                    </div>
                    <span style={{color: "#666", fontSize: "0.85rem"}}>{amenity.name}</span>
                  </div>
                ))}
              </div>
              
              <h3 style={{color: "#333", fontSize: "1.1rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.8rem"}}>Policies</h3>
              <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem"}}>
                <div>
                  <h4 style={{color: "#333", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.5rem"}}>Check-in & Check-out</h4>
                  <ul style={{color: "#666", fontSize: "0.85rem", paddingLeft: "1.2rem", margin: 0}}>
                    <li style={{marginBottom: "0.3rem"}}>Check-in: 3:00 PM</li>
                    <li style={{marginBottom: "0.3rem"}}>Check-out: 12:00 PM</li>
                    <li>Early check-in and late check-out available upon request (additional charges may apply)</li>
                  </ul>
                </div>
              </div>
            </div>
            
          {/* Related Rooms */}
          <div style={{marginTop: "1rem"}}>
            <h3 style={{color: "#333", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem"}}>You May Also Like</h3>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem"}}>
              {/* Executive Suite Card */}
              <div style={{
                background: "#fff",
                borderRadius: "4px", 
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)", 
                overflow: "hidden", 
                display: "flex", 
                flexDirection: "column",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
              }}
              >
                <div style={{position: "relative", height: "180px", overflow: "hidden"}}>
                  <img 
                    src={executive1} 
                    alt="Executive Suite" 
                    style={{
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                </div>
                <div style={{padding: "1rem", flexGrow: 1, display: "flex", flexDirection: "column"}}>
                  <h4 style={{color: "#333", fontWeight: 600, fontSize: "1rem", marginBottom: "0.4rem"}}>Executive Suite</h4>
                  <p style={{color: "#666", fontSize: "0.8rem", marginBottom: "0.8rem", lineHeight: 1.5}}>Elegant suite with a separate living area and premium facilities.</p>
                  <div style={{marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <span style={{color: "#6a9bd8", fontWeight: 600, fontSize: "0.9rem"}}> ₹6000 - ₹8000 <span style={{color: "#666", fontWeight: 400, fontSize: "0.75rem"}}>/ night</span></span>
                    <Link to="/rooms/executive-suite" style={{textDecoration: "none"}}>
                      <button style={{
                        background: "transparent",
                        border: "1px solid #6a9bd8",
                        color: "#6a9bd8",
                        padding: "0.4rem 0.8rem",
                        borderRadius: "3px",
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem"
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "#6a9bd8";
                        e.target.style.color = "white";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "transparent";
                        e.target.style.color = "#6a9bd8";
                      }}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Family Room Card */}
              <Link to="/rooms/family-room" style={{textDecoration: "none"}}>
                <div style={{
                  background: "#fff",
                  borderRadius: "4px", 
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)", 
                  overflow: "hidden", 
                  display: "flex", 
                  flexDirection: "column",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
                }}
                >
                <div style={{position: "relative", height: "180px", overflow: "hidden"}}>
                  <img 
                    src={family1} 
                    alt="Family Room" 
                    style={{
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                </div>
                <div style={{padding: "1rem", flexGrow: 1, display: "flex", flexDirection: "column"}}>
                  <h4 style={{color: "#333", fontWeight: 600, fontSize: "1rem", marginBottom: "0.4rem"}}>Family Room</h4>
                  <p style={{color: "#666", fontSize: "0.8rem", marginBottom: "0.8rem", lineHeight: 1.5}}>Comfortable family room with two queen beds, perfect for families.</p>
                  <div style={{marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <span style={{color: "#6a9bd8", fontWeight: 600, fontSize: "0.9rem"}}> ₹4000- ₹6000 <span style={{color: "#666", fontWeight: 400, fontSize: "0.75rem"}}>/ night</span></span>
                    <button style={{
                      background: "transparent",
                      border: "1px solid #6a9bd8",
                      color: "#6a9bd8",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "3px",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "#6a9bd8";
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#6a9bd8";
                    }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DeluxeRoom;