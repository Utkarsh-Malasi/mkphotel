import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DeluxeRoom from './components/rooms/DeluxeRoom';
import ExecutiveSuite from './components/rooms/ExecutiveSuite';
import FamilyRoom from './components/rooms/FamilyRoom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div style={{background: "#f5fafd", minHeight: "100vh", width: "100%", margin: 0, padding: 0, boxSizing: "border-box", overflowX: "hidden"}}>
        <Header />
        <Routes>e          <Route path="/" element={
            <section id='home-section'>
              <Home />
              <main style={{padding: 0, maxWidth: "1400px", margin: "0 auto"}}>
                <About />
                <Gallery />
                <Rooms />
                <Amenities />
                <Contact />
              </main>
            </section>
          } />
          <Route path="/rooms/deluxe-room" element={<DeluxeRoom />} />
          <Route path="/rooms/executive-suite" element={<ExecutiveSuite />} />
          <Route path="/rooms/family-room" element={<FamilyRoom />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;