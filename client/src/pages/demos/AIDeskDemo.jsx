import { useState } from "react";
import DemoHeader from "./DemoHeader";

const quickActions = [
  "Prepare me for a developer interview",
  "Write my one-minute introduction",
  "Create a frontend learning roadmap",
  "Give me a clean accounting checklist"
];

const getReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes("interview")) {
    return "Use this structure: introduce yourself, explain one strong project, mention the business problem it solves, then talk about the technologies you used. That gives a more mature interview answer than only listing skills.";
  }

  if (text.includes("introduction")) {
    return "My name is Ankit Kumar Singh. I currently work with Bright Paper Products and I have two years of accounting experience. Alongside that, I am building my web development career through project-based learning in frontend development and business-focused tools.";
  }

  if (text.includes("roadmap") || text.includes("frontend")) {
    return "Next roadmap: semantic HTML, advanced CSS layouts, JavaScript fundamentals, React projects, GitHub workflow, and backend basics. Keep building dashboard and invoicing tools because they fit your profile very well.";
  }

  if (text.includes("accounting") || text.includes("checklist")) {
    return "Use a reliable accounting routine: verify entries, update ledger records, confirm invoice totals, review Excel sheets, and end with a balance check. Accuracy and consistency are what make your profile stronger.";
  }

  return "Aksis AI Desk is built as a personalized assistant concept for career preparation, communication support, and workflow guidance.";
};

function AIDeskDemo() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Welcome to Aksis AI Desk, a portfolio-ready assistant concept for personal career support."
    }
  ]);
  const [value, setValue] = useState("");

  const submit = (text) => {
    const cleaned = text.trim();
    if (!cleaned) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: cleaned },
      { role: "bot", text: getReply(cleaned) }
    ]);
    setValue("");
  };

  return (
    <section className="section">
      <div className="container">
        <DemoHeader
          title="Aksis AI Desk"
          subtitle="A personalized assistant concept for interview help, learning guidance, and accounting-friendly support."
        />

        <div className="demo-showcase-grid">
          <article className="detail-card">
            <p className="eyebrow">Product pitch</p>
            <h3>Why this project improves the portfolio</h3>
            <p>
              This demo shows a more modern portfolio idea: a personal assistant feature built around
              real user needs such as interview prep, self-introduction, and workflow reminders.
            </p>
            <div className="mini-metrics">
              <span className="metric-pill">Personalized UX</span>
              <span className="metric-pill">Prompt-based flows</span>
              <span className="metric-pill">Brand-connected feature</span>
            </div>
          </article>

          <article className="detail-card">
            <p className="eyebrow">Use cases</p>
            <ul className="insight-list">
              <li>Developer interview preparation</li>
              <li>Short self-introduction generation</li>
              <li>Learning roadmap suggestions</li>
              <li>Accounting routine support</li>
            </ul>
          </article>
        </div>

        <article className="assistant-shell large-assistant-shell">
          <div className="assistant-log">
            {messages.map((message, index) => (
              <div className={`assistant-bubble ${message.role}`} key={`${message.role}-${index}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="prompt-row">
            {quickActions.map((prompt) => (
              <button className="ghost-btn" key={prompt} onClick={() => submit(prompt)} type="button">
                {prompt}
              </button>
            ))}
          </div>

          <div className="assistant-action-row">
            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Ask the AI desk for guidance"
            />
            <button className="cta-btn" onClick={() => submit(value)} type="button">
              Send
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AIDeskDemo;
