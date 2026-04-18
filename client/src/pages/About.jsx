import { careerSteps, education, profile, skillGroups } from "../data/portfolio";

function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">About profile</p>
          <h1 className="section-title">A developer path shaped by business exposure and discipline.</h1>
          <p className="section-sub">
            This profile is designed for web developer opportunities while also staying credible for accounting-support and admin-tech work.
          </p>
        </div>

        <div className="about-grid">
          <article className="detail-card profile-summary-card">
            <h3>Profile summary</h3>
            <div className="detail-list">
              <div><span>Name</span><strong>{profile.name}</strong></div>
              <div><span>Date of birth</span><strong>{profile.dob}</strong></div>
              <div><span>Current company</span><strong>{profile.company}</strong></div>
              <div><span>Experience</span><strong>{profile.experience}</strong></div>
            </div>
          </article>

          <article className="detail-card">
            <h3>Career statement</h3>
            <p>
              I am growing toward professional web development roles while carrying a practical
              understanding of business operations and accounting work. That combination helps me
              think beyond appearance and focus on software that is useful, clear, and reliable.
            </p>
            <div className="mini-metrics">
              <span className="metric-pill">B.A. English Honours ongoing</span>
              <span className="metric-pill">DSA and web development training</span>
              <span className="metric-pill">Accounting institute training</span>
            </div>
          </article>
        </div>

        <section className="section inner-section">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic and training background</h2>
          <div className="timeline-list">
            {education.map((item) => (
              <article className="timeline-row" key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section inner-section">
          <p className="eyebrow">Growth direction</p>
          <h2 className="section-title">How this profile creates value</h2>
          <div className="career-grid">
            {careerSteps.map((item) => (
              <article className="detail-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section inner-section">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Core strengths across tech and accounting</h2>
          <div className="career-grid">
            {skillGroups.map((group) => (
              <article className="detail-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tech-row">
                  {group.items.map((item) => (
                    <span className="pill" key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
