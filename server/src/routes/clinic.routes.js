import express from "express";
import { getStudent } from "../services/student.service.js";
import { getClinicRecords } from "../services/clinic.service.js";

const router = express.Router();

router.get("/:studentId/clinic", (req, res) => {
  const { studentId } = req.params;

  if (!getStudent(studentId)) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Student not found",
    });
  }

  const records = getClinicRecords(studentId);

  if (!records) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Clinic record not found",
    });
  }

  res.json(records);
});

export default router;