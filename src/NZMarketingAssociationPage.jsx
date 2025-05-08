// React layout for NZ Marketing Association - One Page Site using regular CSS
import React from "react";
import "./NZMarketingAssociationPage.css";
import heroImage from './assets/hero-image.jpg';

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
  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">NZ Marketing Association</h1>
        <nav className="nav">
          <a href="#" className="nav-link">Events</a>
          <a href="#" className="nav-link">Resources</a>
          <a href="#" className="nav-link">Training</a>
          <a href="#" className="nav-link">About</a>
        </nav>
        <button className="login-button">Login</button>
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

      {/* Feature Cards */}
      <section className="features-section">
        <div className="features-grid">
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