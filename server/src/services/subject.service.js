import { subjects } from "../data/subjects.data.js";

export function getSubjects(studentId) {
  return subjects.filter((item) => item.studentId === studentId);
}