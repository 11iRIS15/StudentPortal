import { enrollments } from "../data/enrollment.data.js";

export function getEnrollment(studentId) {
  return enrollments.find((item) => item.studentId === studentId) || null;
}