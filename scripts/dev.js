import { spawn } from "child_process";

const processes = [];
const nodeExec = process.execPath;

function run(name, command, args) {
  const child = spawn(command, args, {
    stdio: "inherit",
    env: process.env,
  });

  child.on("exit", (code, signal) => {
    if (code !== null) {
      console.log(`[${name}] exited with code ${code}`);
    } else if (signal) {
      console.log(`[${name}] stopped by signal ${signal}`);
    }

    if (code && code !== 0) {
      shutdown(1);
    }
  });

  processes.push(child);
}

function shutdown(exitCode = 0) {
  for (const proc of processes) {
    if (!proc.killed) {
      proc.kill("SIGINT");
    }
  }

  setTimeout(() => process.exit(exitCode), 100);
}

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

run("server", nodeExec, ["server.js"]);
const clientArgs = ["./node_modules/vite/bin/vite.js", "--config", "client/vite.config.js"];

if (process.env.VITE_PORT) {
  clientArgs.push("--port", process.env.VITE_PORT);
}

run("client", nodeExec, clientArgs);
