import React from "react";

const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: "fab fa-facebook-f",
    color: "#3b5998"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: "fab fa-instagram",
    color: "#e1306c"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: "fab fa-twitter",
    color: "#1da1f2"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "fab fa-linkedin-in",
    color: "#0077b5"
  }
];

const contactInfo = [
  {
    type: "Phone",
    value: "+91 9997784157, +91 9910597907",
    icon: "fas fa-phone-alt",
    action: "tel:+919997784157",
    color: "#6a9bd8"
  },
  {
    type: "Email",
    value: "mkphotelresort@gmail.com",
    icon: "fas fa-envelope",
    action: "mailto:mkphotelresort@gmail.com",
    color: "#c8a97e"
  },
  {
    type: "Address",
    value: "63f Rajpur Road Dehradun-248001",
    icon: "fas fa-map-marker-alt",
    action: "https://g.co/kgs/BZdPDyQ",
    color: "#a2c8b2"
  },
  {
    type: "Hours",
    value: "24/7 Customer Service",
    icon: "fas fa-clock",
    action: null,
    color: "#d8c3a9"
  }
];

const Contact = () => {
  return (
    <section id="contact" style={{
      background: "linear-gradient(135deg, #f5fafd 0%, #e6f2ff 100%)", // Light blue gradient
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
          Contact Us
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
          We're always here to assist you. Reach out to us through any of the following channels for inquiries, feedback, or assistance.
        </p>
        
        {/* Contact Information Cards */}
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "3rem"}}>
          {contactInfo.map((info, idx) => (
            <div 
              key={idx} 
              style={{
                background: "#fff",
                borderRadius: "4px", 
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)", 
                padding: "1.5rem", 
                transition: "all 0.3s ease",
                border: "1px solid rgba(0,0,0,0.03)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderColor = info.color;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.03)";
              }}
            >
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: `${info.color}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
                transition: "all 0.3s ease"
              }}>
                <i className={info.icon} style={{color: info.color, fontSize: "1.2rem"}}></i>
              </div>
              <h3 style={{color: "#333", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem"}}>{info.type}</h3>
              <p style={{color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem", flex: 1}}>{info.value}</p>
              
              {info.action && (
                <a 
                  href={info.action}
                  target={info.type === "Address" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  style={{
                    background: info.color,
                    color: "white",
                    border: "none",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "3px",
                    fontWeight: "500",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    textDecoration: "none"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
                    // Darken the background color slightly
                    e.target.style.background = info.color + "dd";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
                    e.target.style.background = info.color;
                  }}
                >
                  <i className={info.type === "Phone" ? "fas fa-phone" : 
                             info.type === "Email" ? "fas fa-envelope" : 
                             info.type === "Address" ? "fas fa-map-marked-alt" : info.icon}></i>
                  {info.type === "Phone" ? "Call Now" : 
                   info.type === "Email" ? "Send Email" : 
                   info.type === "Address" ? "View Map" : info.type}
                </a>
              )}
            </div>
          ))}
        </div>
        
        {/* Social Media Section */}
        <div style={{
          background: "linear-gradient(135deg, #6a9bd8 0%, #5a8cc8 100%)", // Light blue gradient
          borderRadius: "4px",
          padding: "2rem",
          color: "#fff",
          textAlign: "center",
          boxShadow: "0 5px 15px rgba(106, 155, 216, 0.3)",
          marginTop: "2rem"
        }}>
          <h3 style={{fontSize: "1.3rem", fontWeight: 600, marginBottom: "1rem"}}>Connect With Us</h3>
          <p style={{fontSize: "0.9rem", marginBottom: "1.5rem", maxWidth: "800px", margin: "0 auto 1.5rem auto"}}>
            Follow us on social media for updates, promotions, and a glimpse into the luxury experience at MKP Hotels.
          </p>
          
          <div style={{display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap"}}>
            {socialMedia.map((platform, idx) => (
              <a 
                key={idx} 
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1.2rem",
                  transition: "all 0.3s ease",
                  margin: "0 0.5rem",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = platform.color;
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <i className={platform.icon}></i>
                <span style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "0.7rem",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s ease",
                  opacity: 0
                }} className="social-tooltip">{platform.name}</span>
              </a>
            ))}
          </div>
          
          <style jsx>{`
            a:hover .social-tooltip {
              bottom: -25px;
              opacity: 1;
            }
          `}</style>
        </div>
        
        {/* Contact Form Teaser */}
        <div style={{
          marginTop: "3rem",
          background: "#fff",
          borderRadius: "4px",
          padding: "2rem",
          textAlign: "center",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
        }}>
          <h3 style={{color: "#333", fontSize: "1.3rem", fontWeight: 600, marginBottom: "1rem"}}>Have Questions?</h3>
          <p style={{color: "#666", fontSize: "0.9rem", marginBottom: "1.5rem", maxWidth: "800px", margin: "0 auto 1.5rem auto"}}>
            Our team is ready to assist you with any inquiries about our accommodations, services, or special requests.
          </p>
          <div style={{display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap"}}>
            <a 
              href="tel:+919997784157"
              style={{
                background: "#6a9bd8",
                color: "white",
                border: "none",
                padding: "0.8rem 1.5rem",
                borderRadius: "3px",
                fontWeight: "500",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none"
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#5a8cc8";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#6a9bd8";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
              }}
              >
                <i className="fas fa-phone"></i>
                Call Us 
              </a>
            <a
              href="tel:+919910597907"
              style={{
                background: "#6a9bd8",
                color: "white",
                border: "none",
                padding: "0.8rem 1.5rem",
                borderRadius: "3px",
                fontWeight: "500",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none"
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#5a8cc8";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#6a9bd8";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
              }}
            >
              <i className="fas fa-phone"></i>
              Call Us
            </a>
            <a
              href="mailto:mkphotelresort@gmail.com"
              style={{
                background: "transparent",
                color: "#6a9bd8",
                border: "1px solid #6a9bd8",
                padding: "0.8rem 1.5rem",
                borderRadius: "3px",
                fontWeight: "500",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none"
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#6a9bd8";
                e.target.style.color = "white";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#6a9bd8";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
              }}
            >
              <i className="fas fa-envelope"></i>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;