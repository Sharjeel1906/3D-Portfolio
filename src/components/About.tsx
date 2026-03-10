import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I&apos;m Sharjeel Ahmed, a Software Engineering student at the
          University of Karachi, focused on building reliable backend systems
          and modern mobile applications. I enjoy designing solutions that are
          fast, secure, and scalable—whether it&apos;s an API, an automation
          script, or a full product.
        </p>
        <p className="para">
          My core skills include Python (Django &amp; Flask), Flutter, web
          scraping, automation, and SQL databases such as SQLite and MySQL. I
          blend backend logic with clean Flutter UIs to create end-to-end
          experiences, and I&apos;m constantly learning—especially around AI,
          data analysis, and best practices that keep code maintainable and
          production-ready.
        </p>
      </div>
    </div>
  );
};

export default About;
