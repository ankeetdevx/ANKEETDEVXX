import { useState } from "react";
import { aiAssistantKnowledge, assistantPrompts, profile } from "../data/portfolio";

const starterReply =
  "I am Ankit's AI portfolio assistant. Ask me for an interview answer, self-introduction, learning roadmap, or accounting checklist.";

const buildReply = (input) => {
  const text = input.toLowerCase();
  const matchedTopic = aiAssistantKnowledge.find((topic) =>
    topic.match.some((keyword) => text.includes(keyword))
  );

  if (matchedTopic) {
    return matchedTopic.reply;
  }

  return `${profile.shortName}'s assistant is designed to help with career preparation, portfolio talking points, and business-task support. Use one of the quick prompts for the best results.`;
};

function AiAssistant() {
  const [messages, setMessages] = useState([{ role: "bot", text: starterReply }]);
  const [value, setValue] = useState("");

  const submitMessage = (message) => {
    const text = message.trim();
    if (!text) return;

    setMessages((current) => [
      ...current,
      { role: "user", text },
      { role: "bot", text: buildReply(text) }
    ]);
    setValue("");
  };

  return (
    <article className="assistant-shell">
      <div className="assistant-headline">
        <p className="eyebrow">Embedded AI assistant</p>
        <h2 className="section-title">A custom portfolio feature, not just a text box.</h2>
        <p className="section-sub">
          This project idea makes the portfolio more unique by showing a personal assistant concept for career, communication, and workflow guidance.
        </p>
      </div>

      <div className="assistant-log">
        {messages.map((message, index) => (
          <div className={`assistant-bubble ${message.role}`} key={`${message.role}-${index}`}>
            {message.text}
          </div>
        ))}
      </div>

      <div className="prompt-row">
        {assistantPrompts.map((prompt) => (
          <button className="ghost-btn" key={prompt} onClick={() => submitMessage(prompt)} type="button">
            {prompt}
          </button>
        ))}
      </div>

      <div className="assistant-action-row">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Ask the assistant something useful"
        />
        <button className="cta-btn" onClick={() => submitMessage(value)} type="button">
          Send
        </button>
      </div>
    </article>
  );
}

export default AiAssistant;
