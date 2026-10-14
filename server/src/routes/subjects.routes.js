import express from "express";
import { getStudent } from "../services/student.service.js";
import { getSubjects } from "../services/subject.service.js";

const router = express.Router();

router.get("/:studentId/subjects", (req, res) => {
  const { studentId } = req.params;

  if (!getStudent(studentId)) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Student not found",
    });
  }

  res.json(getSubjects(studentId));
});

export default router;