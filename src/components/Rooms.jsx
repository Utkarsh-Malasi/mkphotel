import React from "react";
import deluxe1 from "../components/images/deluxe1.avif";
import family1 from "../components/images/family1.jpg";
import executive1 from "../components/images/executive1.avif";
const rooms = [
  {
    name: "Deluxe Room",
    img: deluxe1,
    description: "A spacious deluxe room with a king-size bed, city view, and modern amenities.",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Mini Bar", "Room Service"]
  },
  {
    name: "Executive Suite",
    img: executive1,
    description: "Elegant suite with a separate living area, luxurious bathroom, and premium facilities.",
    amenities: ["Living Room", "Bathtub", "Coffee Maker", "Work Desk", "Complimentary Breakfast"]
  },
  {
    name: "Family Room",
    img: family1,
    description: "Comfortable family room with two queen beds, perfect for a relaxing family stay.",
    amenities: ["2 Queen Beds", "Kids Zone", "Free Wi-Fi", "Balcony", "Laundry Service"]
  }
];

// Map amenities to icons
const amenityIcons = {
  "Free Wi-Fi": "fas fa-wifi",
  "Air Conditioning": "fas fa-snowflake",
  "Smart TV": "fas fa-tv",
  "Mini Bar": "fas fa-glass-martini-alt",
  "Room Service": "fas fa-concierge-bell",
  "Living Room": "fas fa-couch",
  "Bathtub": "fas fa-bath",
  "Coffee Maker": "fas fa-coffee",
  "Work Desk": "fas fa-desk",
  "Complimentary Breakfast": "fas fa-utensils",
  "2 Queen Beds": "fas fa-bed",
  "Kids Zone": "fas fa-child",
  "Balcony": "fas fa-door-open",
  "Laundry Service": "fas fa-tshirt"
};

const Rooms = () => (
  <section id="rooms" style={{
    background: "linear-gradient(180deg, #f8f9fa 0%, #f0f4f8 100%)", 
    padding: "3.5rem 0", 
    borderRadius: "0", 
    margin: "1.5rem 0", 
    width: "100%"
  }}>
    <div style={{width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 2vw"}}>
      <h2 style={{
        color: "#333", 
        fontSize: "1.8rem", 
        fontWeight: 600, 
        textAlign: "center", 
        marginBottom: "2rem",
        position: "relative",
        display: "inline-block",
        left: "50%",
        transform: "translateX(-50%)"
      }}>
        Our Rooms
        <span style={{
          position: "absolute",
          bottom: "-8px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50px",
          height: "2px",
          background: "#c8a97e",
          borderRadius: "1px"
        }}></span>
      </h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem"}}>
        {rooms.map((room, idx) => (
          <div 
            key={idx} 
            style={{
              background: "#fff",
              borderRadius: "4px", 
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)", 
              overflow: "hidden", 
              display: "flex", 
              flexDirection: "column",
              transition: "all 0.3s ease",
              border: "none"
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
            <div style={{position: "relative", overflow: "hidden"}}>
              <img 
                src={room.img} 
                alt={room.name} 
                style={{
                  width: "100%", 
                  height: "200px", 
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
              <div style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(200, 169, 126, 0.9)",
                color: "white",
                padding: "0.3rem 0.6rem",
                borderRadius: "3px",
                fontSize: "0.75rem",
                fontWeight: "600",
                letterSpacing: "0.5px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}>
                Premium
              </div>
            </div>
            <div style={{padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column"}}>
              <h3 style={{
                color: "#333", 
                fontWeight: 600, 
                fontSize: "1.1rem", 
                marginBottom: "0.6rem",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                paddingBottom: "0.5rem"
              }}>{room.name}</h3>
              <p style={{color: "#666", fontSize: "0.85rem", marginBottom: "1rem", lineHeight: 1.5}}>{room.description}</p>
              <div style={{marginTop: "auto"}}>
                <h4 style={{color: "#333", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: 600}}>
                  <i className="fas fa-list-ul" style={{marginRight: "0.4rem", fontSize: "0.75rem"}}></i>
                  Room Amenities
                </h4>
                <ul style={{color: "#666", fontSize: "0.8rem", paddingLeft: "0.3rem", margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem 0.8rem", listStyleType: "none"}}>
                  {room.amenities.map((am, i) => (
                    <li key={i} style={{marginBottom: "0.2rem", display: "flex", alignItems: "center"}}>
                      <i className={amenityIcons[am] || "fas fa-check"} style={{marginRight: "0.4rem", fontSize: "0.75rem", color: "#c8a97e"}}></i>
                      {am}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{display: "flex", gap: "0.8rem", marginTop: "1.2rem"}}>
                <a 
                  href={`/rooms/${room.name.toLowerCase().replace(' ', '-')}`} 
                  style={{
                    flex: "1",
                    background: "transparent",
                    border: "1px solid #6a9bd8",
                    color: "#6a9bd8",
                    padding: "0.6rem 0.8rem",
                    borderRadius: "3px",
                    fontWeight: "500",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.02)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                    letterSpacing: "0.5px",
                    textDecoration: "none"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#6a9bd8";
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 4px 8px rgba(106, 155, 216, 0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#6a9bd8";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.02)";
                  }}
                >
                  <i className="fas fa-info-circle" style={{fontSize: "0.75rem"}}></i>
                  Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Rooms;