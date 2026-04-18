import { useMemo, useState } from "react";
import DemoHeader from "./DemoHeader";

const quiz = [
  { q: "Which HTML tag is used for the main page heading?", opts: ["<h1>", "<header>", "<title>", "<main>"], ans: 0 },
  { q: "Which CSS feature is most useful for making card layouts responsive?", opts: ["float", "grid", "z-index", "outline"], ans: 1 },
  { q: "Which JavaScript method converts a JSON string into an object?", opts: ["JSON.parse()", "JSON.build()", "JSON.make()", "JSON.stringify()"], ans: 0 },
  { q: "Which approach best improves website usability on mobile devices?", opts: ["Large fixed widths", "Responsive layouts", "Hidden navigation only", "Using tables everywhere"], ans: 1 },
  { q: "Which tool skill is especially helpful for accounting work?", opts: ["Tally", "Photoshop", "Blender", "Figma only"], ans: 0 }
];

function WebQuizDemo() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const current = useMemo(() => quiz[index], [index]);

  const next = () => {
    if (selected === null) return;
    const nextScore = selected === current.ans ? score + 1 : score;
    setScore(nextScore);

    if (index + 1 === quiz.length) {
      setCompleted(true);
      return;
    }

    setIndex(index + 1);
    setSelected(null);
  };

  const reset = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setCompleted(false);
  };

  return (
    <section className="section">
      <div className="container wrap">
        <DemoHeader title="Frontend Interview Sprint" />
        <div className="card">
          {completed ? (
            <>
              <h3>Your score: {score}/{quiz.length}</h3>
              <p className="small">
                {score >= 4
                  ? "Strong result. You are showing good readiness for entry-level web roles."
                  : "Good start. Keep practicing frontend basics and business tools together."}
              </p>
              <button className="btn" onClick={reset} type="button">Restart Quiz</button>
            </>
          ) : (
            <>
              <h3>{current.q}</h3>
              <div className="quiz-grid">
                {current.opts.map((option, optionIndex) => (
                  <button
                    key={option}
                    className={`btn btn-outline ${selected === optionIndex ? "selected" : ""}`}
                    onClick={() => setSelected(optionIndex)}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>
              <p className="small">Question {index + 1} of {quiz.length}</p>
              <button className="btn" onClick={next} type="button">Next</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default WebQuizDemo;
