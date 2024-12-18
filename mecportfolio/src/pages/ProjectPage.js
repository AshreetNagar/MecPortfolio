import React from 'react';
import './ProjectPage.css';

const ProjectPage = () => {
  return (
    <div className="project-page">
      {/* Project Title and Image */}
      <section className="project-header">
        <div className="project-title">
          <h1>Project Name</h1>
          <div className="design-type">
            <button>&lt;</button>
            <span>Design Type</span>
            <button>&gt;</button>
          </div>
        </div>
        <div className="project-image">
          <img src="path/to/image.jpg" alt="Project" />
        </div>
      </section>

      {/* What is this? Section */}
      <section className="what-is-this">
        <div className="explanation">
          <h2>What is this?</h2>
          <p>Explanation of the project goes here.</p>
        </div>
        <div className="explanation-image">
          <img src="path/to/image.jpg" alt="Explanation" />
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
                  <li>Bullet Point 1</li>
                  <li>Bullet Point 2</li>
                  <li>Bullet Point 3</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="circle">2</div>
            <div className="step-content">
              <div className="blue-oval">
                <ul>
                  <li>Bullet Point 1</li>
                  <li>Bullet Point 2</li>
                  <li>Bullet Point 3</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="circle">3</div>
            <div className="step-content">
              <div className="blue-oval">
                <ul>
                  <li>Bullet Point 1</li>
                  <li>Bullet Point 2</li>
                  <li>Bullet Point 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Design Process Details */}
      <section className="design-details">
        <h2>Step 1</h2>
        <div className="step-images">
          <img src="path/to/image.jpg" alt="Step 1 Image 1" />
          <img src="path/to/image.jpg" alt="Step 1 Image 2" />
          <img src="path/to/image.jpg" alt="Step 1 Image 3" />
        </div>
        <div className="step-text">
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </div>
      </section>

      <section className="design-details">
        <h2>Step 2</h2>
        <div className="step-images">
          <img src="path/to/image.jpg" alt="Step 2 Image 1" />
          <img src="path/to/image.jpg" alt="Step 2 Image 2" />
          <img src="path/to/image.jpg" alt="Step 2 Image 3" />
        </div>
        <div className="step-text">
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </div>
      </section>

      <section className="design-details">
        <h2>Step 3</h2>
        <div className="step-images">
          <img src="path/to/image.jpg" alt="Step 3 Image 1" />
          <img src="path/to/image.jpg" alt="Step 3 Image 2" />
          <img src="path/to/image.jpg" alt="Step 3 Image 3" />
        </div>
        <div className="step-text">
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </div>
      </section>

      {/* Skills Used */}
      <section className="skills-used">
        <div className="skill">
          <img src="path/to/skill1.jpg" alt="Skill 1" />
          <h3>Skill 1</h3>
          <p>Explanation of Skill 1.</p>
        </div>
        <div className="skill">
          <img src="path/to/skill2.jpg" alt="Skill 2" />
          <h3>Skill 2</h3>
          <p>Explanation of Skill 2.</p>
        </div>
        <div className="skill">
          <img src="path/to/skill3.jpg" alt="Skill 3" />
          <h3>Skill 3</h3>
          <p>Explanation of Skill 3.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="connect">
          <h2>Connect with Me</h2>
          <a href="https://www.linkedin.com">LinkedIn</a>
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

export default ProjectPage;
