import express from "express";
import {
  getStudent,
  getDashboard,
} from "../services/student.service.js";

const router = express.Router();

router.get("/:studentId/profile", (req, res) => {
  const student = getStudent(req.params.studentId);

  if (!student) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Student not found",
    });
  }

  res.json(student);
});

router.get("/:studentId/dashboard", (req, res) => {
  const dashboard = getDashboard(req.params.studentId);

  if (!dashboard) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Student not found",
    });
  }

  res.json(dashboard);
});

export default router;