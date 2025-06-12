import React from "react";
import { Link } from "react-router-dom";
import executive1 from "../images/executive1.avif";
import executive2 from "../images/executive2.avif";
import executive3 from "../images/executive3.avif";
import executive4 from "../images/executive4.jpg";
import deluxe1 from "../images/deluxe1.avif";
import family1 from "../images/family1.jpg";

const roomImages = [
  executive1,
  executive2,
  executive3,
  executive4
];

const amenities = [
  { name: "Living Room", icon: "fas fa-couch" },
  { name: "Bathtub", icon: "fas fa-bath" },
  { name: "Coffee Maker", icon: "fas fa-coffee" },
  { name: "Work Desk", icon: "fas fa-desk" },
  { name: "Complimentary Breakfast", icon: "fas fa-utensils" },
  { name: "King Size Bed", icon: "fas fa-bed" },
  { name: "Free Wi-Fi", icon: "fas fa-wifi" },
  { name: "Smart TV", icon: "fas fa-tv" },
  { name: "Mini Bar", icon: "fas fa-glass-martini-alt" },
  { name: "Room Service", icon: "fas fa-concierge-bell" },
  { name: "Panoramic View", icon: "fas fa-mountain" },
  { name: "Luxury Toiletries", icon: "fas fa-pump-soap" }
];

const ExecutiveSuite = () => {
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
          <span style={{color: "#6a9bd8", fontSize: "0.85rem", fontWeight: 500}}>Executive Suite</span>
        </div>
        
        <div style={{display: "grid", gridTemplateColumns: "1fr", gap: "2rem"}}>
          {/* Room Gallery */}
          <div style={{background: "#fff", borderRadius: "4px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", overflow: "hidden"}}>
            <div style={{position: "relative", height: "400px", overflow: "hidden"}}>
              {roomImages.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Executive Suite View ${idx+1}`} 
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
                <h2 style={{color: "#333", fontSize: "1.5rem", fontWeight: 600, margin: 0}}>Executive Suite</h2>
                <div style={{background: "rgba(106, 155, 216, 0.1)", padding: "0.4rem 0.8rem", borderRadius: "3px"}}>
                  <span style={{color: "#6a9bd8", fontWeight: 600, fontSize: "1.2rem"}}> ₹ 6000</span>
                  <span style={{color: "#666", fontSize: "0.8rem"}}> / night</span>
                </div>
              </div>
              
              <div style={{borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "1rem", marginBottom: "1rem"}}>
                <div style={{display: "flex", gap: "1rem", color: "#666", fontSize: "0.85rem"}}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <i className="fas fa-ruler-combined" style={{marginRight: "0.4rem", color: "#6a9bd8"}}></i>
                    <span>65 m²</span>
                  </div>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <i className="fas fa-user-friends" style={{marginRight: "0.4rem", color: "#6a9bd8"}}></i>
                    <span>2-3 Guests</span>
                  </div>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <i className="fas fa-bed" style={{marginRight: "0.4rem", color: "#6a9bd8"}}></i>
                    <span>King Bed</span>
                  </div>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <i className="fas fa-mountain" style={{marginRight: "0.4rem", color: "#6a9bd8"}}></i>
                    <span>Panoramic View</span>
                  </div>
                </div>
              </div>
              
              <h3 style={{color: "#333", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.8rem"}}>Suite Description</h3>
              <p style={{color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem"}}>
                Our Executive Suite offers an unparalleled luxury experience with a spacious layout featuring a separate living area and bedroom. The elegant interior design combines contemporary aesthetics with timeless comfort, creating an atmosphere of sophisticated relaxation.
              </p>
              <p style={{color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem"}}>
                Floor-to-ceiling windows provide breathtaking panoramic views, while the luxurious bathroom features both a deep soaking bathtub and a separate rainfall shower. The suite is equipped with premium amenities, including a Nespresso coffee machine, Smart TV with streaming capabilities, and a fully stocked mini bar.
              </p>
              <p style={{color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem"}}>
                Executive Suite guests enjoy exclusive benefits such as complimentary breakfast, access to the Executive Lounge, priority reservations at our restaurants, and personalized concierge service. Experience the pinnacle of luxury and comfort during your stay in our Executive Suite.
              </p>
              
              <h3 style={{color: "#333", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.8rem"}}>Suite Amenities</h3>
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
              
              <h3 style={{color: "#333", fontSize: "1.1rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.8rem"}}>Executive Benefits</h3>
              <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem"}}>
                <div style={{background: "rgba(106, 155, 216, 0.05)", padding: "1rem", borderRadius: "4px", border: "1px solid rgba(106, 155, 216, 0.1)"}}>
                  <h4 style={{color: "#333", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.5rem", display: "flex", alignItems: "center"}}>
                    <i className="fas fa-utensils" style={{marginRight: "0.5rem", color: "#6a9bd8"}}></i>
                    Dining Privileges
                  </h4>
                  <ul style={{color: "#666", fontSize: "0.85rem", paddingLeft: "1.2rem", margin: 0}}>
                    <li style={{marginBottom: "0.3rem"}}>Complimentary breakfast at our signature restaurant</li>
                    <li style={{marginBottom: "0.3rem"}}>Priority reservations at all hotel restaurants</li>
                    <li>Daily evening canapés and cocktails at the Executive Lounge</li>
                  </ul>
                </div>
              </div>
              
              <h3 style={{color: "#333", fontSize: "1.1rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.8rem"}}>Policies</h3>
              <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem"}}>
                <div>
                  <h4 style={{color: "#333", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.5rem"}}>Check-in & Check-out</h4>
                  <ul style={{color: "#666", fontSize: "0.85rem", paddingLeft: "1.2rem", margin: 0}}>
                    <li style={{marginBottom: "0.3rem"}}>Check-in: 2:00 PM (priority check-in)</li>
                    <li style={{marginBottom: "0.3rem"}}>Check-out: 12:00 PM (late check-out available)</li>
                    <li>Early check-in subject to availability</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{color: "#333", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.5rem"}}>Cancellation Policy</h4>
                  <ul style={{color: "#666", fontSize: "0.85rem", paddingLeft: "1.2rem", margin: 0}}>
                    <li style={{marginBottom: "0.3rem"}}>Free cancellation up to 72 hours before check-in</li>
                    <li>Cancellations made within 72 hours of check-in are subject to a one-night charge</li>
                  </ul>
                </div>
              </div>
            </div>
            
          {/* Related Rooms */}
          <div style={{marginTop: "1rem"}}>
            <h3 style={{color: "#333", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem"}}>You May Also Like</h3>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem"}}>
              {/* Deluxe Room Card */}
              <Link to="/rooms/deluxe-room" style={{textDecoration: "none"}}>
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
                      src={deluxe1} 
                      alt="Deluxe Room" 
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
                  <div style={{padding: "1rem"}}>
                    <h4 style={{color: "#333", fontSize: "1rem", fontWeight: 600, margin: "0 0 0.5rem 0"}}>Deluxe Room</h4>
                    <p style={{color: "#666", fontSize: "0.8rem", margin: "0 0 0.5rem 0"}}>Spacious room with city view</p>
                    <div style={{color: "#6a9bd8", fontWeight: 600, fontSize: "0.9rem"}}> ₹4000- ₹6000 <span style={{color: "#666", fontWeight: 400, fontSize: "0.8rem"}}>/ night</span></div>
                  </div>
                </div>
              </Link>
              
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
                  <div style={{padding: "1rem"}}>
                    <h4 style={{color: "#333", fontSize: "1rem", fontWeight: 600, margin: "0 0 0.5rem 0"}}>Family Room</h4>
                    <p style={{color: "#666", fontSize: "0.8rem", margin: "0 0 0.5rem 0"}}>Perfect for families with two queen beds</p>
                    <div style={{color: "#6a9bd8", fontWeight: 600, fontSize: "0.9rem"}}> ₹3000- ₹6000 <span style={{color: "#666", fontWeight: 400, fontSize: "0.8rem"}}>/ night</span></div>
                  </div>
                </div>
              </Link>
              {/* Executive Suite Card */}
              <Link to="/rooms/executive-suite" style={{textDecoration: "none"}}>
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
                  <div style={{padding: "1rem"}}>
                    <h4 style={{color: "#333", fontSize: "1rem", fontWeight: 600, margin: "0 0 0.5rem 0"}}>Executive Suite</h4>
                    <p style={{color: "#666", fontSize: "0.8rem", margin: "0 0 0.5rem 0"}}>Luxury suite with panoramic views</p>
                    <div style={{color: "#6a9bd8", fontWeight: 600, fontSize: "0.9rem"}}> ₹6000 <span style={{color: "#666", fontWeight: 400, fontSize: "0.8rem"}}>/ night</span></div>
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

export default ExecutiveSuite;