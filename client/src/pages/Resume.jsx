import { profile, resumeBullets } from "../data/portfolio";

function Resume() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Resume</p>
          <h1 className="section-title">Professional PDF resume attached to the portfolio.</h1>
          <p className="section-sub">
            The resume matches the portfolio story and is ready to share for web development, admin-tech, and accounting-support roles.
          </p>
        </div>

        <div className="career-grid">
          {resumeBullets.map((item) => (
            <article className="detail-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className="resume-banner">
          <div>
            <p className="eyebrow">Recruiter-friendly</p>
            <h3>Fast download, clean preview, and the same branding as the site.</h3>
          </div>
          <div className="hero-actions">
            <a className="cta-btn" href={profile.resumeFile} download>Download Resume PDF</a>
            <a className="outline-btn" href={profile.resumeFile} target="_blank" rel="noreferrer">Open Resume</a>
          </div>
        </div>

        <div className="resume-embed" style={{ marginTop: "1.2rem" }}>
          <iframe title="Resume" src={profile.resumeFile} />
        </div>
      </div>
    </section>
  );
}

export default Resume;
