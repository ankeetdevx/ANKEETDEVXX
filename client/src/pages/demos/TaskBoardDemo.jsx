import { useMemo, useState } from "react";
import DemoHeader from "./DemoHeader";

const initialTasks = [
  { title: "Landing page revision", owner: "Design", priority: "High", status: "Backlog" },
  { title: "Sales sheet cleanup", owner: "Accounts", priority: "Medium", status: "Backlog" },
  { title: "Production workflow review", owner: "Ops", priority: "High", status: "In Progress" },
  { title: "Monthly invoice audit", owner: "Accounts", priority: "Low", status: "Done" }
];

const columns = ["Backlog", "In Progress", "Done"];

function TaskBoardDemo() {
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("Design");
  const [priority, setPriority] = useState("Medium");
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (!title.trim()) return;
    setTasks((current) => [
      ...current,
      { title: title.trim(), owner, priority, status: "Backlog" }
    ]);
    setTitle("");
    setOwner("Design");
    setPriority("Medium");
  };

  const moveTask = (targetIndex, nextStatus) => {
    setTasks((current) =>
      current.map((task, index) =>
        index === targetIndex ? { ...task, status: nextStatus } : task
      )
    );
  };

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) =>
        `${task.title} ${task.owner} ${task.priority}`.toLowerCase().includes(search.toLowerCase())
      ),
    [search, tasks]
  );

  return (
    <section className="section">
      <div className="container">
        <DemoHeader
          title="OpsBoard Pro"
          subtitle="An operations-focused command board with task movement, ownership, and priority handling."
        />

        <div className="detail-card">
          <div className="tool-form-grid">
            <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Task title" />
            <select value={owner} onChange={(event) => setOwner(event.target.value)}>
              <option>Design</option>
              <option>Accounts</option>
              <option>Ops</option>
              <option>Tech</option>
            </select>
            <select value={priority} onChange={(event) => setPriority(event.target.value)}>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <button className="cta-btn" onClick={addTask} type="button">Add task</button>
          </div>

          <input
            style={{ marginTop: "1rem" }}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by task, owner, or priority"
          />

          <div className="mini-metrics" style={{ marginTop: "1rem" }}>
            <span className="metric-pill">{tasks.length} total items</span>
            <span className="metric-pill">{tasks.filter((task) => task.status === "In Progress").length} active</span>
            <span className="metric-pill">{tasks.filter((task) => task.priority === "High").length} high priority</span>
          </div>
        </div>

        <div className="board-grid">
          {columns.map((column) => (
            <article className="board-column" key={column}>
              <div className="board-column-head">
                <h3>{column}</h3>
                <span>{filteredTasks.filter((task) => task.status === column).length}</span>
              </div>

              {filteredTasks
                .filter((task) => task.status === column)
                .map((task) => {
                  const taskIndex = tasks.findIndex((item) => item === task);

                  return (
                    <div className="board-task-card" key={`${task.title}-${taskIndex}`}>
                      <strong>{task.title}</strong>
                      <div className="mini-metrics">
                        <span className="metric-pill">{task.owner}</span>
                        <span className="metric-pill">{task.priority}</span>
                      </div>
                      <div className="task-actions">
                        {column !== "Backlog" ? (
                          <button className="ghost-btn" onClick={() => moveTask(taskIndex, "Backlog")} type="button">
                            Backlog
                          </button>
                        ) : null}
                        {column !== "In Progress" ? (
                          <button className="ghost-btn" onClick={() => moveTask(taskIndex, "In Progress")} type="button">
                            In Progress
                          </button>
                        ) : null}
                        {column !== "Done" ? (
                          <button className="ghost-btn" onClick={() => moveTask(taskIndex, "Done")} type="button">
                            Done
                          </button>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TaskBoardDemo;
