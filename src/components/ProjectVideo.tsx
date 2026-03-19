import { useParams } from "react-router-dom";
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
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const project = name ? projectVideos[name] : undefined;
  const title = project?.title ?? "Project not found";

  return (
    <div className="video-page-container">
      <div className="video-page-inner">
        <header className="video-header">
          <div className="video-header-text">
            <h1 className="video-main-title">{title}</h1>
            <p className="video-subtitle">
              {project
                ? "Watch a focused walkthrough of this project, its flow, and key features."
                : "We couldn't find this project, but you can return to the main list."}
            </p>
          </div>
        </header>

        <main className="video-layout">
          <section className="video-primary">
            {project ? (
              <div className="video-player-wrapper">
                <video
                  src={`/videos/${project.video}`}
                  controls
                  autoPlay
                  className="project-video-player"
                />
              </div>
            ) : (
              <div className="video-missing">
                <p>This project video is not available.</p>
              </div>
            )}
          </section>

          <aside className="video-sidebar">
            <div className="video-info-card">
              <h4>Overview</h4>
              <p>
                {project
                  ? `${project.title} is one of my portfolio projects. This video gives you a quick sense of the experience without installing anything.`
                  : "Use the back button to return and choose another project."}
              </p>
            </div>
            <div className="video-info-card">
              <h4>How to use this demo</h4>
              <p>
                Play the video to see the full user flow, key screens, and main
                interactions. Pause anytime to inspect specific details.
              </p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default ProjectVideo;

