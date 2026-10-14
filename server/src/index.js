import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from "node:fs";
import yaml from "yaml";

import studentsRoutes from "./routes/students.routes.js";
import announcementsRoutes from "./routes/announcements.routes.js";
import subjectsRoutes from "./routes/subjects.routes.js";
import scheduleRoutes from "./routes/schedule.routes.js";
import gradesRoutes from "./routes/grades.routes.js";
import enrollmentRoutes from "./routes/enrollment.routes.js";
import financeRoutes from "./routes/finance.routes.js";
import libraryRoutes from "./routes/library.routes.js";
import clinicRoutes from "./routes/clinic.routes.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/v1/health", (req, res) => {
  res.json({ status: "ok" });
});

// Student endpoints
app.use("/api/v1/students", studentsRoutes);
app.use("/api/v1/students", subjectsRoutes);
app.use("/api/v1/students", scheduleRoutes);
app.use("/api/v1/students", gradesRoutes);
app.use("/api/v1/students", enrollmentRoutes);
app.use("/api/v1/students", financeRoutes);
app.use("/api/v1/students", libraryRoutes);
app.use("/api/v1/students", clinicRoutes);

// Announcements
app.use("/api/v1/announcements", announcementsRoutes);

// Swagger documentation
const openApiFile = fs.readFileSync(
  new URL("../openapi.yaml", import.meta.url),
  "utf8"
);

const openApiDocument = yaml.parse(openApiFile);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

// Unknown endpoint
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    title: "Not Found",
    detail: "The requested endpoint does not exist.",
  });
});

app.listen(PORT, () => {
  console.log(`StudenPortal API running at http://localhost:${PORT}`);
  console.log(`Swagger documentation at http://localhost:${PORT}/docs`);
});