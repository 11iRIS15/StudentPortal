import express from "express";
import { getStudent } from "../services/student.service.js";
import { getFinance } from "../services/finance.service.js";

const router = express.Router();

router.get("/:studentId/finance", (req, res) => {
  const { studentId } = req.params;

  if (!getStudent(studentId)) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Student not found",
    });
  }

  const finance = getFinance(studentId);

  if (!finance) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Finance record not found",
    });
  }

  res.json(finance);
});

export default router;