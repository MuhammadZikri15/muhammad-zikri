import { useState } from "react";
import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import k3 from "../assets/k3.png";
import k4 from "../assets/k4.png";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const [selectedWork, setSelectedWork] = useState(null);

  const prototypeUrlFashion =
    "https://www.figma.com/proto/tfybYYg201x8QCElcme2HK/WEB-Fashion?node-id=1022-64&t=IXhPNGV3W0r8XAV7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1022%3A64&show-proto-sidebar=1";
  const figmaEmbedUrlFashion =
    "https://embed.figma.com/proto/tfybYYg201x8QCElcme2HK/WEB-Fashion?node-id=1022-64&t=IXhPNGV3W0r8XAV7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1022%3A64&show-proto-sidebar=1&embed-host=share";

  const prototypeUrlRPL =
    "https://www.figma.com/proto/9m74K9sWkt9w7WED05vNGP/Tugas-RPL?node-id=2201-356&t=rJmekAc5UwBHTmwL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2201%3A356&show-proto-sidebar=1";
  const figmaEmbedUrlRPL =
    "https://embed.figma.com/proto/9m74K9sWkt9w7WED05vNGP/Tugas-RPL?node-id=2201-356&t=rJmekAc5UwBHTmwL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2201%3A356&show-proto-sidebar=1&embed-host=share";

  const projects = [
    {
      title: "WEB Fashion",
      tags: ["Figma"],
      desc: "A modern fashion website prototype designed with clean layout, product showcase, and responsive user flow.",
      github: "https://github.com/username/ecommerce-platform",
      demo: prototypeUrlFashion,
      embed: figmaEmbedUrlFashion,
      previewTitle: "WEB Fashion",
    },
    {
      title: "Tugas RPL",
      tags: ["Figma"],
      desc: "An interactive system prototype created in Figma to present application flow, interface structure, and user interaction.",
      github: "https://github.com/username/tugas-rpl",
      demo: prototypeUrlRPL,
      embed: figmaEmbedUrlRPL,
      previewTitle: "Tugas RPL",
    },
    {
      title: "Portfolio Website",
      tags: ["VITE", "CSS"],
      desc: "A personal portfolio website with responsive layout and modern visual style.",
      github: "https://github.com/username/portfolio-website",
      demo: "https://portfolio-website-demo.com",
      embed: "",
      previewTitle: "Portfolio Website",
    },
  ];

  const contentWorks = [
    { title: "Instagram Feed 1", image: k1 },
    { title: "Instagram Feed 2", image: k2 },
    { title: "Instagram Feed 3", image: k3 },
    { title: "Instagram Feed 4", image: k4 },
  ];

  const FigmaIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 38 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
        fill="#1ABCFE"
      />
      <path
        d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
        fill="#0ACF83"
      />
      <path
        d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
        fill="#FF7262"
      />
      <path
        d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
        fill="#F24E1E"
      />
      <path
        d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
        fill="#A259FF"
      />
    </svg>
  );

  return (
    <section id="projects" className="projects">
      <style>
        {`
          .content-feed-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
  align-items: stretch;
}

.content-feed-card {
  padding: 0 !important;
  overflow: hidden;
  cursor: pointer;
  border-radius: 15px;
  aspect-ratio: 4 / 5;
  background: #111c2d;
  transition: all 0.3s ease;
}

.content-feed-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
}

.content-feed-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;
}

.content-feed-card:hover .content-feed-img {
  transform: scale(1.05);
}

@media (max-width: 1200px) {
  .content-feed-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .content-feed-grid {
    grid-template-columns: 1fr;
  }
}

          @media (max-width: 640px) {
            .content-feed-grid {
              grid-template-columns: 1fr;
            }

            .content-feed-card {
              height: 360px;
            }
          }
        `}
      </style>

      <h2>Project</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{
              opacity: 0,
              scale: 0.85,
              rotateY: -15,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
          >
            <div
              className="project-image"
              style={{
                position: "relative",
                overflow: "hidden",
                minHeight: "260px",
              }}
            >
              {project.embed ? (
                <iframe
                  src={project.embed}
                  title={`${project.previewTitle} Prototype Preview`}
                  style={{
                    width: "100%",
                    height: "125%",
                    border: "none",
                    opacity: "0.38",
                    transform: "translateY(28px) scale(1.12)",
                    transformOrigin: "center top",
                    pointerEvents: "none",
                  }}
                  allowFullScreen
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "260px",
                    background:
                      "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(0,0,0,0.7))",
                  }}
                />
              )}

              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  textAlign: "center",
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.62))",
                  color: "#ffffff",
                  padding: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    opacity: "0.9",
                    marginBottom: "8px",
                  }}
                >
                  Prototype Preview
                </span>
                <strong
                  style={{
                    fontSize: "22px",
                    lineHeight: "1.3",
                    fontWeight: "700",
                  }}
                >
                  {project.previewTitle}
                </strong>
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "8px",
                    opacity: "0.9",
                  }}
                >
                  Click Demo to open the interactive prototype
                </p>
              </div>
            </div>

            <div className="project-body">
              <div className="tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      fontWeight: "700",
                      lineHeight: "1",
                    }}
                  >
                    {tag === "Figma" && <FigmaIcon />}
                    {tag}
                  </span>
                ))}
              </div>

              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                  <FaGithub size={22} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn demo-btn"
                >
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className="content-work-section"
        style={{ marginTop: "100px", paddingTop: "20px" }}
      ></div>
      <div
        className="section-title"
        style={{ textAlign: "left", marginBottom: "46px" }}
      >
        <h2>Content Feed Instagram</h2>
      </div>

      <div className="content-feed-grid">
        {contentWorks.map((work, index) => (
          <motion.div
            className="project-card content-feed-card"
            key={index}
            onClick={() => setSelectedWork(work)}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >
            <img
              src={work.image}
              alt={work.title}
              className="content-feed-img"
            />
          </motion.div>
        ))}
      </div>

      {selectedWork && (
        <div
          onClick={() => setSelectedWork(null)}
          style={{
            position: "fixed",
            inset: "0",
            zIndex: "9999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1080px",
              maxHeight: "92vh",
              background: "#0b0f14",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 25px 80px rgba(0, 0, 0, 0.55)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedWork(null)}
              aria-label="Close image preview"
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                zIndex: "2",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(0, 0, 0, 0.75)",
                color: "#ffffff",
                fontSize: "24px",
                lineHeight: "38px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <div
              style={{
                maxHeight: "92vh",
                overflow: "auto",
                padding: "20px",
                background: "#05080c",
              }}
            >
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  borderRadius: "14px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
