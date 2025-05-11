
import React, { useState } from "react"; // Import useState for managing mobile menu toggle
import "./NZMarketingAssociationPage.css";
import heroImage from './assets/hero-image.jpg';
import logo from './assets/logo.jpg';

// Static data for feature cards 
const features = [
  {
    id: 1,
    title: "Marketing Automation 101",
    type: "Workshop",
    date: "May 15, 2025",
    image: "img1.jpg",
  },
  {
    id: 2,
    title: "The Future of Customer Data",
    type: "Webinar",
    date: "May 22, 2025",
    image: "img2.jpg",
  },
  {
    id: 3,
    title: "Content Strategy Trends 2025",
    type: "Article",
    date: "May 7, 2025",
    image: "img3.jpg",  
  },
];

export default function NZMarketingAssociationPage() {
  // State for managing visibility of mobile navigation menu
  // isMobileMenuOpen: boolean, true if menu is open, false otherwise
  // setIsMobileMenuOpen: function to toggle the state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="page-wrapper"> {/* Main container for the entire page */}
      <header className="header">
        <img src={logo} alt="NZ Marketing Association Logo" className="header-logo" />
        {/* Hamburger Button: Visible only on mobile screens to toggle the navigation menu  */}
        <button
          className="hamburger-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggles the mobile menu state
          aria-label="Toggle menu" // Provides a label for screen readers
          aria-expanded={isMobileMenuOpen} 
        >
          {isMobileMenuOpen ? "✕" : "☰"} {/* Changes icon based on menu state: ✕ for close, ☰ for open */}
        </button>
        {/* Groups main navigation links and login button */}
        {/* Conditionally adds 'mobile-menu-open' class to enable specific styling when menu is open on mobile */}
        <div className={`nav-wrapper ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <nav className="nav">
            <a href="#" className="nav-link">Events</a>
            <a href="#" className="nav-link">Resources</a>
            <a href="#" className="nav-link">Training</a>
            <a href="#" className="nav-link">About</a>
          </nav>
          <button className="login-button">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img src={heroImage} alt="Hero banner" className="hero-background-image" />
        <div className="hero-content">
          <h2 className="hero-title">Empowering New Zealand’s Marketing Professionals</h2>
          <p className="hero-subtext">Join the community driving marketing excellence across Aotearoa.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search events, resources, or training..." className="search-input" />
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Feature Cards Section*/}
      <section className="features-section">
        <div className="features-grid">
          {/* renders feature cards from the 'features' array */}
          {features.map((item) => (
            <div key={item.id} className="feature-card">
              <img src={item.image} alt={item.title} className="feature-image" />
              <div className="feature-content">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-meta">{item.type} · {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}