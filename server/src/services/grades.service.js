import { grades } from "../data/grades.data.js";

export function getGrades(studentId) {
  return grades.filter((item) => item.studentId === studentId);
}