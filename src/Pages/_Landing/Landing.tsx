import React, { useState } from "react";
import "./Landing.css";


function Navigation() {
    return (
      <div className="app-container">

  
        <div className="banner-video">
          <h2>Welcome to</h2>
          <h1>MIT WORLD PEACE UNIVERSITY</h1>
          <p>Shaping the Future with Excellence in Education</p>
        </div>
  
        <section className="features">
          <div className="feature-card">
            <img src="/campus.jpg" alt="Campus" />
            <h3>Modern Campus</h3>
            <p>State-of-the-art facilities and infrastructure.</p>
          </div>
          <div className="feature-card">
            <img src="/students.jpg" alt="Students" />
            <h3>Student Life</h3>
            <p>A vibrant community with diverse activities.</p>
          </div>
          <div className="feature-card">
            <img src="/faculty.jpg" alt="Faculty" />
            <h3>Expert Faculty</h3>
            <p>Learn from experienced professors and mentors.</p>
          </div>
        </section>
  
        <section className="departments">
          <h2>Our Departments</h2>
          <div className="department-list">
            <div className="department-card">Engineering</div>
            <div className="department-card">Business</div>
            <div className="department-card">Medicine</div>
            <div className="department-card">Law</div>
            <div className="department-card">Arts & Humanities</div>
            <div className="department-card">Science</div>
          </div>
        </section>
  
        <section className="events">
          <h2>Upcoming Events</h2>
          <div className="event-card">
            <h3>Tech Conference 2025</h3>
            <p>Join us for a day of innovation and networking.</p>
          </div>
          <div className="event-card">
            <h3>Graduation Ceremony</h3>
            <p>Celebrate the achievements of our graduates.</p>
          </div>
        </section>
  
        <section className="testimonials">
          <h2>What Our Students Say</h2>
          <div className="testimonial-card">
            <p>"This university provided me with the best education and opportunities!"</p>
            <h4>- Jane Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"A truly world-class institution with excellent faculty."</p>
            <h4>- John Smith</h4>
          </div>
        </section>
  
        <footer className="footer">
          <p>&copy; 2025 University Name. All Rights Reserved.</p>
          <nav>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Careers</li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }

  export default Navigation;