import Reveal from "../components/Reveal";
import DetailsToggle from "../components/DetailsToggle";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Pro",
    type: "Full-Stack Web Platform",
    stack: "React • Supabase • Auth • Database",
    description:
      "A portfolio builder platform where users authenticate, preview, select, and manage multiple portfolio templates.",
    highlights: [
      "Supabase authentication",
      "Template preview & selection",
      "Protected routes",
      "Scalable React architecture",
    ],
    details: [
      "Designed auth flows and protected routes using Supabase.",
      "Structured templates as data to keep the UI scalable.",
      "Focused on maintainable components over quick hacks.",
    ],
  },
  {
    title: "Zenith",
    type: "Real-Time Collaboration Platform",
    stack: "WebRTC • React • Real-Time APIs",
    description:
      "A real-time collaboration system featuring video calls, screen sharing, chat, and a sketch board.",
    highlights: [
      "WebRTC video & screen sharing",
      "Multi-user sessions",
      "Real-time chat",
      "Interactive whiteboard",
    ],
    details: [
      "Handled real-time state sync across users.",
      "Worked with browser media APIs and permissions.",
      "Managed edge cases like reconnects and stream changes.",
    ],
  },
  {
    title: "Dream Traders",
    type: "Production Frontend Rebuild",
    stack: "React • Vite • Advanced CSS",
    description:
      "Rebuilt the frontend of an educational trading platform while preserving complex animations.",
    highlights: [
      "Complete frontend rebuild",
      "Multi-page architecture",
      "Animation preservation",
      "Performance-focused structure",
    ],
    details: [
      "Recreated layouts under strict visual constraints.",
      "Improved structure without breaking existing UX.",
      "Balanced animation quality with performance.",
    ],
  },
  {
    title: "Mithari Agro Agency",
    type: "Business Website",
    stack: "React • Modern CSS • UI Design",
    description:
      "Responsive business website with dark mode, animations, and product-focused UI.",
    highlights: [
      "Business-driven UI",
      "Dark mode",
      "Sidebar layout",
      "Responsive design",
    ],
    details: [
      "Translated business needs into UI decisions.",
      "Designed navigation for non-technical users.",
      "Focused on clarity over flashy visuals.",
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <Reveal>
        <h1>Projects</h1>
        <p className="projects-intro">
          Real projects I’ve built across full-stack systems, real-time
          applications, and production frontends.
        </p>
      </Reveal>

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <div className="project-card tilt">
              <h3>{project.title}</h3>
              <span className="project-type">{project.type}</span>
              <p className="project-stack">{project.stack}</p>
              <p className="project-desc">{project.description}</p>

              <ul className="project-points">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <DetailsToggle>
                <ul className="project-details">
                  {project.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </DetailsToggle>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
