import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./styles/Work.css";
import { useLoading } from "../context/LoadingProvider";

const projectVideos: Record<
  string,
  { title: string; video: string; description?: string }
> = {
  data_entry: {
    title: "Automated Data Entry",
    video: "automated data entry.mp4",
  },
  text_description: {
    title: "Image Description",
    video: "text_description.mp4",
  },
  stacky_trend: {
    title: "Stacky Trend",
    video: "stacky_trend.mp4",
  },
  ecommerce: {
    title: "E-Commerce App",
    video: "ecommerce.mp4",
  },
  movie_info: {
    title: "Movie Info App",
    video: "movie_info.mp4",
  },
  ai_chat_app: {
    title: "AI Chat App",
    video: "ai_chat_app.mp4",
  },
  billspot: {
    title: "BillSpot",
    video: "billspot.mp4",
  },
};

const ProjectVideo = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const project = name ? projectVideos[name] : undefined;

  if (!project) {
    return (
      <div className="work-section section-container">
        <div className="work-container">
          <h2>Project not found</h2>
          <button
            className="carousel-arrow"
            onClick={() => navigate("/")}
            data-cursor="disable"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="video-page-container">
      <div className="work-section section-container">
        <div className="work-container">
          <div className="video-header">
            <button
              className="video-back-btn"
              onClick={() => navigate("/")}
              data-cursor="disable"
              title="Go back"
            >
              ←
            </button>
            <div className="video-title-wrapper">
              <h2>
                {project.title} <span>Demo</span>
              </h2>
            </div>
          </div>

          <div className="video-content">
            <div className="video-info">
              <div className="video-info-card">
                <h4>{project.title}</h4>
                <p>Project walkthrough video preview</p>
              </div>
              <div className="video-info-card">
                <h4>About</h4>
                <p>Watch this detailed demo to see the project in action and understand its features and functionality.</p>
              </div>
            </div>

            <div className="video-player-wrapper">
              <video
                src={`/videos/${project.video}`}
                controls
                autoPlay
                className="project-video-player"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideo;

