import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation in Science</h4>
                <h5>The Citizens Foundation School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Matriculation in Science with 93.90% marks, building a
              strong foundation in core science and analytical thinking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate in Pre-Engineering</h4>
                <h5>Government Delhi College</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Intermediate in Pre-Engineering with 82% marks, focusing
              on mathematics, physics and chemistry to support a career in
              software engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Software Engineering (BSSE)</h4>
                <h5>UBIT, University of Karachi</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              Currently pursuing BSSE, learning software engineering
              fundamentals, backend development, data analysis and modern
              development practices while building real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
