import { Link } from "react-router-dom";

function DemoHeader({ title, subtitle = "Interactive portfolio project" }) {
  return (
    <div className="demo-topbar">
      <div>
        <p className="eyebrow">Live project demo</p>
        <h1 className="section-title">{title}</h1>
        <p className="section-sub">{subtitle}</p>
      </div>
      <Link className="outline-btn" to="/projects">Back to Projects</Link>
    </div>
  );
}

export default DemoHeader;
