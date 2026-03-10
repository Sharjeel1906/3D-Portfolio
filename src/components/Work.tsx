import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Blog Website",
    category: "Web Backend Development",
    tools: "Python, Flask, SQL, HTML/CSS",
    image: "/images/blog.png",
    slug: "blog",
    liveUrl: "http://SharjeelAhmed20.pythonanywhere.com",
  },
  {
    title: "Spotify Billboard Automation App",
    category: "Automation",
    tools: "Python, Selenium, Web Scraping, APIs",
    image: "/images/billspot.png",
    slug: "billspot",
  },
  {
    title: "Stacky Trends",
    category: "Automation & Data",
    tools: "Python, Data Analysis, Automation",
    image: "/images/stacky.png",
    slug: "stacky_trend",
  },
  {
    title: "Cafe & Wifi Website",
    category: "Web Backend Development",
    tools: "Python, Flask, SQL, HTML/CSS",
    image: "/images/cafe.png",
    slug: "cafe",
    liveUrl: "https://cafe12.pythonanywhere.com/",
  },
  {
    title: "AI Chat App",
    category: "AI Solutions",
    tools: "Python, OpenAI/Gemini, APIs",
    image: "/images/ai_chat_app.png",
    slug: "ai_chat_app",
  },
  {
    title: "Automated Data Entry",
    category: "Process Automation",
    tools: "Python, Selenium, Automation",
    image: "/images/auto-data.jpeg",
    slug: "data_entry",
  },
  {
    title: "Image Description",
    category: "AI & Computer Vision",
    tools: "Python, AI Models, APIs",
    image: "/images/describer.png",
    slug: "text_description",
  },
  {
    title: "Movie Info",
    category: "API Integration",
    tools: "Python, REST APIs, Data Fetching",
    image: "/images/movie_info.png",
    slug: "movie_info",
  },
  {
    title: "E-Commerce App",
    category: "Web Backend Development",
    tools: "Python, Flask/Django, SQL, APIs",
    image: "/images/ecommerce.png",
    slug: "ecommerce",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.liveUrl || `/project/${project.slug}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
