// src/Hero.js
import React from "react";
import "../../Styles/Homepage.css"; // Import the CSS file for styling

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-heading">
        {/* Applying different styles for "Story" and "Teller" */}
        <span className="hero-word black">Story</span>{" "}
        <span className="hero-word orange">Teller</span>
      </h1>
      <h2 className="hero-subhead">
        Read, Publish and Share your stories/blogs with people
      </h2>
    </section>
  );
}

export default Hero;
