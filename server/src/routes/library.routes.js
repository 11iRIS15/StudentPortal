import express from "express";
import { getStudent } from "../services/student.service.js";
import { getLibraryRecords } from "../services/library.service.js";

const router = express.Router();

router.get("/:studentId/library", (req, res) => {
  const { studentId } = req.params;

  if (!getStudent(studentId)) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Student not found",
    });
  }

  const records = getLibraryRecords(studentId);

  if (!records) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Library record not found",
    });
  }

  res.json(records);
});

export default router;