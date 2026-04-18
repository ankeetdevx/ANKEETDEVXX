import { Link } from "react-router-dom";
import AiAssistant from "../components/AiAssistant";
import {
  deploymentFacts,
  heroStats,
  profile,
  projects,
  proofPoints,
  workHighlights
} from "../data/portfolio";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-aura aura-one" />
        <div className="hero-aura aura-two" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Premium developer portfolio</span>
            <h1>
              Web developer portfolio with <span>business-ready product thinking</span>.
            </h1>
            <p className="hero-summary">{profile.intro}</p>

            <div className="hero-actions">
              <Link className="cta-btn" to="/projects">See Live Projects</Link>
              <a className="outline-btn" href={profile.resumeFile} download>Download Resume</a>
            </div>

            <div className="hero-stat-grid">
              {heroStats.map((item) => (
                <article className="metric-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-photo-card">
              <img src={profile.profileImage} alt={profile.name} />
              <div className="hero-photo-overlay">
                <p>{profile.name}</p>
                <span>{profile.title}</span>
              </div>
            </div>

            <div className="floating-note top-note">
              <span>Current role</span>
              <strong>{profile.company}</strong>
            </div>

            <div className="floating-note bottom-note">
              <span>Portfolio focus</span>
              <strong>Frontend + accounting workflows</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why this portfolio works</p>
            <h2 className="section-title">A stronger profile for real interviews and hosting.</h2>
          </div>

          <div className="feature-grid">
            {proofPoints.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container dual-showcase">
          <article className="spotlight-card">
            <p className="eyebrow">Professional snapshot</p>
            <h2 className="section-title">Career direction with practical business grounding.</h2>
            <ul className="insight-list">
              {workHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <AiAssistant />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head-inline">
            <div>
              <p className="eyebrow">Project lineup</p>
              <h2 className="section-title">Interactive projects that feel more product-ready.</h2>
            </div>
            <Link className="outline-btn" to="/projects">Open Project Gallery</Link>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.route}>
                <span className="mini-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
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
                <Link className="cta-btn" to={project.route}>Launch Demo</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container deployment-panel">
          <div>
            <p className="eyebrow">Node.js hosting</p>
            <h2 className="section-title">Built to run on an Express server after production build.</h2>
          </div>
          <div className="deployment-grid">
            {deploymentFacts.map((fact) => (
              <article className="deploy-card" key={fact}>
                <p>{fact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
