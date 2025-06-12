import React from "react";

const amenitiesData = [
  {
    category: "Wellness & Spa",
    icon: "fas fa-spa",
    color: "#6a9bd8", // Light blue accent
    items: [
      { name: "Luxury Spa", description: "Indulge in our signature treatments designed to rejuvenate your body and mind", icon: "fas fa-hot-tub" },
      { name: "Wellness Center", description: "State-of-the-art fitness equipment and personalized training sessions", icon: "fas fa-dumbbell" },
      { name: "Indoor Pool", description: "Temperature-controlled pool with panoramic views of the city", icon: "fas fa-swimming-pool" },
      { name: "Yoga Studio", description: "Daily classes led by certified instructors in our serene studio", icon: "fas fa-pray" }
    ]
  },
  {
    category: "Dining Experience",
    icon: "fas fa-utensils",
    color: "#c8a97e",
    items: [
      { name: "Fine Dining", description: "Award-winning restaurant featuring international cuisine prepared by master chefs", icon: "fas fa-star" },
      { name: "Rooftop Bar", description: "Exclusive cocktails and breathtaking views in our sophisticated lounge", icon: "fas fa-glass-cheers" },
      { name: "24/7 Room Service", description: "Gourmet meals delivered to your room any time of day or night", icon: "fas fa-concierge-bell" },
      { name: "Wine Cellar", description: "Curated selection of fine wines from around the world", icon: "fas fa-wine-glass-alt" }
    ]
  },
  {
    category: "Luxury Services",
    icon: "fas fa-concierge-bell",
    color: "#a2c8b2",
    items: [
      { name: "Concierge", description: "Personalized assistance for all your needs during your stay", icon: "fas fa-user-tie" },
      { name: "Valet Parking", description: "Complimentary valet service for all hotel guests", icon: "fas fa-car" },
      { name: "Airport Transfer", description: "Luxury vehicle transportation to and from the airport", icon: "fas fa-shuttle-van" },
      { name: "Butler Service", description: "Dedicated butler service for suite guests", icon: "fas fa-user-shield" }
    ]
  },
  {
    category: "Business & Events",
    icon: "fas fa-briefcase",
    color: "#d8c3a9",
    items: [
      { name: "Conference Rooms", description: "Fully equipped meeting spaces with cutting-edge technology", icon: "fas fa-chalkboard-teacher" },
      { name: "Business Center", description: "24-hour access to computers, printers, and office supplies", icon: "fas fa-print" },
      { name: "Event Planning", description: "Professional team to help organize and execute your perfect event", icon: "fas fa-calendar-check" },
      { name: "Wedding Services", description: "Elegant venues and comprehensive wedding packages", icon: "fas fa-rings-wedding" }
    ]
  }
];

const Amenities = () => (
  <section id="amenities" style={{
    background: "linear-gradient(135deg, #f5fafd 0%, #e6f2ff 100%)", // Light blue gradient background
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
        Luxury Amenities & Services
        <span style={{
          position: "absolute",
          bottom: "-8px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50px",
          height: "2px",
          background: "#6a9bd8", // Light blue accent
          borderRadius: "1px"
        }}></span>
      </h2>
      <p style={{color: "#555", fontSize: "0.9rem", marginBottom: "2.5rem", maxWidth: "800px", margin: "0 auto 2.5rem auto", textAlign: "center", lineHeight: "1.6"}}>
        Experience unparalleled luxury with our premium amenities and personalized services designed to make your stay exceptional.
      </p>
      
      <div style={{display: "flex", flexDirection: "column", gap: "2.5rem"}}>
        {amenitiesData.map((category, idx) => (
          <div key={idx} style={{width: "100%"}}>
            <div style={{display: "flex", alignItems: "center", marginBottom: "1.2rem"}}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: category.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
              }}>
                <i className={category.icon} style={{color: "#fff", fontSize: "1rem"}}></i>
              </div>
              <h3 style={{color: "#333", fontSize: "1.3rem", fontWeight: 600, margin: 0}}>{category.category}</h3>
            </div>
            
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.2rem"}}>
              {category.items.map((item, i) => (
                <div 
                  key={i} 
                  style={{
                    background: "#fff",
                    borderRadius: "4px", 
                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)", 
                    padding: "1.5rem", 
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(0,0,0,0.03)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = category.color;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.03)";
                  }}
                >
                  <div style={{display: "flex", alignItems: "center", marginBottom: "0.8rem"}}>
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: `${category.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "0.8rem"
                    }}>
                      <i className={item.icon} style={{color: category.color, fontSize: "0.9rem"}}></i>
                    </div>
                    <h4 style={{color: "#333", fontSize: "1rem", fontWeight: 600, margin: 0}}>{item.name}</h4>
                  </div>
                  <p style={{color: "#666", fontSize: "0.85rem", lineHeight: 1.6, margin: 0}}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        marginTop: "3rem",
        background: "linear-gradient(135deg, #6a9bd8 0%, #5a8cc8 100%)", // Light blue gradient
        borderRadius: "4px",
        padding: "2rem",
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 5px 15px rgba(106, 155, 216, 0.3)"
      }}>
        <h3 style={{fontSize: "1.3rem", fontWeight: 600, marginBottom: "1rem"}}>Experience Luxury Like Never Before</h3>
        <p style={{fontSize: "0.9rem", marginBottom: "1.5rem", maxWidth: "800px", margin: "0 auto 1.5rem auto"}}>
          Our dedicated staff is committed to providing you with an unforgettable stay. Discover the perfect blend of comfort, convenience, and sophistication.
        </p>
        <button style={{
          background: "#fff",
          color: "#6a9bd8",
          border: "none",
          padding: "0.7rem 1.5rem",
          borderRadius: "3px",
          fontWeight: "500",
          fontSize: "0.9rem",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem"
        }}
        onMouseOver={(e) => {
          e.target.style.background = "#f0f0f0";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseOut={(e) => {
          e.target.style.background = "#fff";
          e.target.style.transform = "translateY(0)";
        }}
        >
          <i className="fas fa-concierge-bell"></i>
          Book Your Experience
        </button>
      </div>
    </div>
  </section>
);

export default Amenities;