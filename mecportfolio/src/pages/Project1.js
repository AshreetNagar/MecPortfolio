import React, { useState } from 'react';
import './Project1.css';

const tools = ['Tool 1', 'Tool 2', 'Tool 3']; // Add more tools as needed

const Project1 = () => {
  const [currentToolIndex, setCurrentToolIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentToolIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : tools.length - 1));
  };

  const handleNextClick = () => {
    setCurrentToolIndex((prevIndex) => (prevIndex < tools.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="project-page">
      {/* Project Title and Image */}
      <section className="project-header">
        <div className="project-title">
          <h1>Project 1 Electric Motor</h1> {/* CHANGE THIS: Update project name */}
          <div className="design-type">
            <button onClick={handlePrevClick}>&lt;</button>
            <span>{tools[currentToolIndex]}</span> {/* Update tool name */}
            <button onClick={handleNextClick}>&gt;</button>
          </div>
        </div>
        <div className="project-image">
          <img src={require('../assets/images/project-image.jpg')} alt="Project" /> {/* Updated image path */}
        </div>
      </section>

      <section className="what-is-this flipped-background">
      <div className="what-is-this-content">
        <div className="left-side">
          <h2>What is this?</h2>
          <p>Description of the project goes here.</p> {/* CHANGE THIS: Update description */}
        </div>
        <div className="right-side">
          <img src={require('../assets/images/explanation-image.jpg')} alt="Explanation" /> {/* CHANGE THIS: Update image path */}
        </div>
      </div>
    </section>


      {/* Engineering Design Process */}
      <section className="design-process">
        <h2>Engineering Design Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="circle">1</div>
            <div className="step-content">
              <div className="blue-oval">
                <ul>
                  <li>Step 1 - Bullet Point 1</li> {/* CHANGE THIS: Update bullet points */}
                  <li>Step 1 - Bullet Point 2</li>
                  <li>Step 1 - Bullet Point 3</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Add additional steps as needed */}
        </div>
      </section>

      {/* Engineering Design Process Details */}
      <section className="design-details flipped-background">
        <h2>Step 1 Details</h2>
        <div className="step-images">
          <img src=".\assets\images/step1-image1.jpg" alt="Step 1 Image 1" /> {/* CHANGE THIS: Update image path */}
          <img src=".\assets\images/step1-image2.jpg" alt="Step 1 Image 2" />
          <img src=".\assets\images/step1-image3.jpg" alt="Step 1 Image 3" />
        </div>
        <div className="step-text">
          <span>Detail A</span> {/* CHANGE THIS: Update details */}
          <span>Detail B</span>
          <span>Detail C</span>
        </div>
      </section>

      {/* Additional sections with alternating backgrounds as needed */}

      {/* Footer */}
      <footer className="footer">
        <div className="connect">
          <h2>Connect with Me</h2>
          <a href="https://www.linkedin.com">LinkedIn</a> {/* CHANGE THIS: Update links */}
          <a href="mailto:someone@example.com">Email</a>
          <a href="https://grabcad.com">GrabCAD</a>
        </div>
        <div className="copyright">
          &copy; 2024 Akansha Naga. All Rights Reserved.
        </div>
        <div className="programmed-by">
          Programmed by Ashreet Nagar
        </div>
      </footer>
    </div>
  );
};

export default Project1;
