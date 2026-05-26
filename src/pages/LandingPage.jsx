import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { FaUserGraduate, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import './LandingPage.css'

const LandingPage = () => {
  const { isAuthenticated } = useContext(AuthContext)

  // If already logged in, skip the landing page entirely
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  // Format for the 4 student creators
  const teamMembers = [
    {
      id: 1,
      name: "Mohit Patil",
      role: "Lead Developer",
      bio: "[Insert brief bio/contributions for Mohit here]",
      image: "/images/mohit.jpg" 
    },
    {
      id: 2,
      name: "Shashikant Patil",
      role: "UI/UX Designer",
      bio: "[Insert brief bio/contributions for Shashikant here]",
      image: "/images/shashikant.jpg" 
    },
    {
      id: 3,
      name: "Chandrajeet Kachhava",
      role: "Backend Engineer",
      bio: "[Insert brief bio/contributions for Chandrajeet here]",
      image: "/images/chandrajeet.jpg" 
    },
    {
      id: 4,
      name: "[Member 4 Name]",
      role: "Project Manager",
      bio: "[Insert brief bio/contributions for Member 4 here]",
      image: "" 
    }
  ]

  return (
    <div className="landing-page">
      
      {/* Landing Navbar */}
      <nav className="landing-nav">
        <div className="landing-nav-logo">
          <div className="landing-nav-icon">S</div>
          <span>Student Alumni Interconnection</span>
        </div>
        <div className="landing-nav-actions">
          <Link to="/login" className="btn-login-outline">Login</Link>
          <Link to="/register" className="btn-register-solid">Register</Link>
        </div>
      </nav>

      {/* Hero / Platform Information Section */}
      <section className="hero-section animate-fade-up">
        <div className="hero-badge">🚀 The premier networking platform</div>
        <h1 className="hero-title">
          Welcome to the <br />
          <span className="text-gradient">Student Alumni Platform</span>
        </h1>
        <p className="hero-subtitle">
          A dedicated space designed to bridge the gap between current students and successful alumni. 
          Foster mentorships, explore job opportunities, schedule mock interviews, and build a lasting professional network.
        </p>
        <div className="hero-buttons">
          <Link to="/register" className="btn-register-solid" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
            Join the Network Today
          </Link>
          <a href="#about" className="btn-secondary">Learn More</a>
        </div>
      </section>

      {/* About The Platform */}
      <section id="about" className="section-container animate-fade-up delay-1">
        <div className="section-header">
          <h2>About Our Platform</h2>
          <p>Discover the core mission behind our interconnection system.</p>
        </div>
        <div className="content-block">
          <h3>Our Mission</h3>
          <p>
            [Insert your platform's detailed mission statement here. Ensure you describe the problems you are solving 
            for students and how alumni can give back to their alma mater through jobs, webinars, and direct mentorship.]
          </p>
          <br/>
          <h3>Why We Built This</h3>
          <p>
            [Insert the origin story of the application here. Discuss the gap in standard university systems that led 
            your team to design and build a unified dashboard for alumni networking.]
          </p>
        </div>
      </section>

      {/* Creators / Team Section */}
      <section className="section-container animate-fade-up delay-2">
        <div className="section-header">
          <h2>Meet the Creators</h2>
          <p>The dedicated student team behind the platform</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-avatar">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <FaUserGraduate />
                )}
              </div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <div className="team-bio">{member.bio}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container animate-fade-up delay-3">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Have questions? Reach out to the development team.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon"><FaEnvelope /></div>
            <div className="contact-info">
              <h4>Email Support</h4>
              <p>[contact@example.com]</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon"><FaMapMarkerAlt /></div>
            <div className="contact-info">
              <h4>University Campus</h4>
              <p>[University Name, Department]</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon"><FaPhoneAlt /></div>
            <div className="contact-info">
              <h4>Phone</h4>
              <p>[+1 (555) 000-0000]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Student Alumni Interconnection Platform. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default LandingPage
