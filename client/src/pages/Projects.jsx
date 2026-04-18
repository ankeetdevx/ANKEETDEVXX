import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";

function Projects() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Project gallery</p>
          <h1 className="section-title">More professional demos for a stronger developer portfolio.</h1>
          <p className="section-sub">
            These projects are designed to look more product-ready and to connect your tech profile with real business workflow use cases.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card premium-project-card" key={project.route}>
              <span className="mini-tag">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="section-sub">{project.impact}</p>
              <div className="mini-metrics">
                {project.metrics.map((metric) => (
                  <span className="metric-pill" key={metric}>{metric}</span>
                ))}
              </div>
              <div className="tech-row">
                {project.stack.map((item) => (
                  <span className="pill" key={item}>{item}</span>
                ))}
              </div>
              <Link className="cta-btn" to={project.route}>View Live Demo</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
