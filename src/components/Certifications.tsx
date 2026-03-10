import "./styles/Career.css";

const Certifications = () => {
  return (
    <div className="career-section career-section--compact section-container" id="certifications">
      <div className="career-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Programming</h4>
                <h5>Udemy</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Backend development with Flask, web scraping, Selenium automation
              and SQL database integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UX Design</h4>
                <h5>Google</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Fundamentals of user experience design, research and prototyping,
              focusing on creating intuitive, user-centered interfaces for web
              and mobile products.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>C++ Programming</h4>
                <h5>Udemy</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              C++ fundamentals including syntax, variables, loops, conditionals
              and problem-solving with algorithms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Prompting Essentials</h4>
                <h5>Google</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Prompt engineering, AI interaction, problem solving with AI and
              practical use of Google AI tools.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Essentials</h4>
                <h5>Google</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              AI fundamentals, machine learning basics, ethical and critical
              thinking, and data analysis using AI tools.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Literacy</h4>
                <h5>DigiSkills</h5>
              </div>
            </div>
            <p>
              Core digital skills for productivity, online collaboration and
              effective use of modern software tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

