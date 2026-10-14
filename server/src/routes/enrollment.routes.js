import express from "express";
import { getStudent } from "../services/student.service.js";
import { getEnrollment } from "../services/enrollment.service.js";

const router = express.Router();

router.get("/:studentId/enrollment", (req, res) => {
  const { studentId } = req.params;

  if (!getStudent(studentId)) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Student not found",
    });
  }

  const enrollment = getEnrollment(studentId);

  if (!enrollment) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Enrollment not found",
    });
  }

  res.json(enrollment);
});

export default router;