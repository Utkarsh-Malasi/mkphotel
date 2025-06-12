import React from "react";

const galleryImages = [
  { src: "/src/components/images/mussoorie1.avif", alt: "Mussoorie View 1" },
  { src: "/src/components/images/mussoorie2.avif", alt: "Mussoorie View 2" },
  { src: "/src/components/images/mussoorie3.avif", alt: "Mussoorie View 3" },
  { src: "/src/components/images/mussoorie4.avif", alt: "Mussoorie View 4" },
  { src: "/src/components/images/mussoorie5.avif", alt: "Mussoorie View 5" },
  { src: "/src/components/images/mussoorie6.avif", alt: "Mussoorie View 6" }
];

const Gallery = () => (
  <section id="gallery" style={{
    background: "linear-gradient(135deg, #f5f5f5 0%, #e9e9e9 100%)", 
    padding: "3.5rem 0", 
    borderRadius: "0", 
    margin: "1.5rem 0 0 0", 
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
        Our Gallery
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
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem"}}>
        {galleryImages.map((img, idx) => (
          <div 
            key={idx} 
            style={{
              overflow: "hidden", 
              borderRadius: "4px", 
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)", 
              background: "#fff",
              transition: "all 0.3s ease",
              border: "none"
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
            <div style={{position: "relative", overflow: "hidden"}}>
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{
                  width: "100%", 
                  height: "220px", 
                  objectFit: "cover", 
                  transition: "transform 0.5s ease", 
                  display: "block"
                }} 
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
              <div 
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
                  padding: "1.5rem 0.8rem 0.6rem 0.8rem",
                  transform: "translateY(100%)",
                  transition: "transform 0.3s ease",
                  color: "white",
                  fontWeight: "500",
                  textAlign: "center",
                  fontSize: "0.85rem",
                  letterSpacing: "0.5px"
                }}
                className="image-caption"
              >
                {img.alt}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        div:hover .image-caption {
          transform: translateY(0);
        }
      `}</style>
    </div>
  </section>
);

export default Gallery;