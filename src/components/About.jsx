import React from "react";

const About = () => (
  <section id="about" style={{
    background: "linear-gradient(180deg, #f8f9fa 0%, #f0f4f8 100%)", 
    padding: "3.5rem 0 3rem 0", 
    borderRadius: "0", 
    margin: "0", 
    width: "100%"
  }}>
    <div style={{width: "100%", maxWidth: "1200px", margin: "0 auto", textAlign: "center", padding: "0 2vw"}}>
      <h2 style={{
        color: "#333", 
        fontSize: "1.8rem", 
        fontWeight: 600, 
        marginBottom: "1.2rem",
        position: "relative",
        display: "inline-block"
      }}>
        About MKP Hotels
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
      <p style={{
        color: "#555", 
        fontSize: "0.9rem", 
        lineHeight: 1.6, 
        marginBottom: "1.8rem",
        maxWidth: "800px",
        margin: "0 auto 2rem auto"
      }}>
        Welcome to MKP Hotels, where luxury meets comfort in the heart of the city. Our hotel offers a blend of modern amenities and timeless elegance, ensuring a memorable stay for every guest. Whether you are traveling for business or leisure, our dedicated staff and world-class facilities are here to cater to your every need.
      </p>
      <div style={{display: "flex", justifyContent: "center", gap: "1.8rem", flexWrap: "wrap", marginTop: "2rem"}}>
        <div style={{
          background: "#fff",
          borderRadius: "4px", 
          padding: "1.8rem 1.5rem", 
          minWidth: "240px", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          border: "none",
          flex: "1 1 240px",
          maxWidth: "320px"
        }} 
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
        }}
        >
          <div style={{
            width: "60px", 
            height: "60px", 
            borderRadius: "50%", 
            background: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem auto",
            color: "#c8a97e",
            fontSize: "1.4rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
            border: "1px solid rgba(0,0,0,0.03)"
          }}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3 style={{color: "#333", fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.8rem"}}>Prime Location</h3>
          <p style={{color: "#666", fontSize: "0.85rem", lineHeight: "1.5"}}>Located in the city center, close to major attractions and business hubs.</p>
        </div>
        <div style={{
          background: "#fff",
          borderRadius: "4px", 
          padding: "1.8rem 1.5rem", 
          minWidth: "240px", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          border: "none",
          flex: "1 1 240px",
          maxWidth: "320px"
        }} 
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
        }}
        >
          <div style={{
            width: "60px", 
            height: "60px", 
            borderRadius: "50%", 
            background: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem auto",
            color: "#c8a97e",
            fontSize: "1.4rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
            border: "1px solid rgba(0,0,0,0.03)"
          }}>
            <i className="fas fa-bed"></i>
          </div>
          <h3 style={{color: "#333", fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.8rem"}}>Luxury Rooms</h3>
          <p style={{color: "#666", fontSize: "0.85rem", lineHeight: "1.5"}}>Spacious, elegantly designed rooms with premium amenities for your comfort.</p>
        </div>
        <div style={{
          background: "#fff",
          borderRadius: "4px", 
          padding: "1.8rem 1.5rem", 
          minWidth: "240px", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
          border: "none",
          flex: "1 1 240px",
          maxWidth: "320px"
        }} 
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
        }}
        >
          <div style={{
            width: "60px", 
            height: "60px", 
            borderRadius: "50%", 
            background: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem auto",
            color: "#c8a97e",
            fontSize: "1.4rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
            border: "1px solid rgba(0,0,0,0.03)"
          }}>
            <i className="fas fa-concierge-bell"></i>
          </div>
          <h3 style={{color: "#333", fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.8rem"}}>Exceptional Service</h3>
          <p style={{color: "#666", fontSize: "0.85rem", lineHeight: "1.5"}}>Our staff is committed to providing personalized and attentive service 24/7.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;