import { useState } from "react";
import { contactCards, profile, socials } from "../data/portfolio";

function Contact() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setMsg("Your email draft has been prepared in the default mail app.");
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Open for web development and accounting-support opportunities.</h1>
          <p className="section-sub">
            This page is designed for direct recruiter contact, project conversations, and career opportunities.
          </p>
        </div>

        <div className="contact-layout">
          <article className="detail-card">
            <h3>Direct contact</h3>
            <div className="contact-stack">
              {contactCards.map((item) => (
                <div className="contact-line" key={item.label}>
                  <span>{item.label}</span>
                  {item.href ? <a href={item.href}>{item.value}</a> : <strong>{item.value}</strong>}
                </div>
              ))}
            </div>

            <div className="contact-profile-box">
              <strong>{profile.title}</strong>
              <p>
                Best suited for roles where UI, business tools, accuracy, and professional execution all matter.
              </p>
            </div>

            <div className="social-row">
              {socials.map((social) => (
                <a className="social-chip" key={social.name} href={social.href} target="_blank" rel="noreferrer">
                  <img src={social.icon} alt={`${social.name} logo`} width="18" height="18" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </article>

          <article className="detail-card">
            <h3>Send a quick message</h3>
            <form className="form" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Your Name" required />
              <input name="email" type="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Write your message here" required />
              <button className="cta-btn" type="submit">Send Message</button>
            </form>
            <p className="notice">{msg}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
