import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { profile, socials } from "../data/portfolio";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" }
];

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <NavLink className="brand" to="/">
            <span className="brand-badge">AK</span>
            <div className="brand-copy">
              <strong>{profile.name}</strong>
              <span>{profile.title}</span>
            </div>
          </NavLink>

          <div className="nav-center">
            <div className="nav-menu-group desktop-only" aria-hidden="true">
              <div className="nav-menu-badge">
                <span />
                <span />
                <span />
              </div>
              <span className="menu-label">Menu</span>
            </div>

            <nav className={`nav-links ${mobileOpen ? "show" : ""}`}>
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </NavLink>
              ))}
              <a className="nav-cta mobile-only" href={profile.resumeFile} download>
                Resume PDF
              </a>
            </nav>
          </div>

          <div className="nav-actions">
            <button
              className="mobile-menu"
              onClick={() => setMobileOpen((value) => !value)}
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>

            <a className="nav-cta desktop-only" href={profile.resumeFile} download>
              Download Resume
            </a>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h3>{profile.title}</h3>
            <p className="section-sub">{profile.subtitle}</p>
          </div>

          <div className="footer-right">
            <div className="social-row">
              {socials.map((social) => (
                <a className="social-chip" key={social.name} href={social.href} target="_blank" rel="noreferrer">
                  <img src={social.icon} alt={`${social.name} logo`} width="18" height="18" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
            <div className="footer-contact">
              <a href={profile.emailHref}>{profile.email}</a>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
