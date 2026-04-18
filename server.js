import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const distPath = path.join(__dirname, "client", "dist");

app.disable("x-powered-by");
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "ankit-portfolio",
    hosting: "node-express",
    build: "react-vite"
  });
});

app.use(
  express.static(distPath, {
    extensions: ["html"],
    maxAge: "1h"
  })
);

app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
});
