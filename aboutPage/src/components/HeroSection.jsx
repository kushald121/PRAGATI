import React from 'react';
import heroSectionImg from "../assets/hero_section_img.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1 className="hero-title">
          Master Tech Skills with Peer-to-Peer Learning
        </h1>
        <p className="hero-description">
          Join a global community to learn cutting-edge tech skills, collaborate
          on real-world projects, and accelerate your career with expert
          mentorship.
        </p>
        <div className="hero-buttons">
          <button className="explore-btn">
            Explore Talent
          </button>
          <button className="hire-btn">
            Hire as Student
          </button>
          <button className="try-btn">
            Try Free
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={heroSectionImg}
          alt="Education"
          className="hero-img"
        />
      </div>
    </section>
  );
};

export default HeroSection;