import { students } from "../data/students.data.js";
import { enrollments } from "../data/enrollment.data.js";
import { finances } from "../data/finance.data.js";
import { announcements } from "../data/announcements.data.js";

export function getStudent(studentId) {
  return students.find((student) => student.id === studentId) || null;
}

export function getDashboard(studentId) {
  const student = getStudent(studentId);

  if (!student) return null;

  return {
    student,
    enrollment:
      enrollments.find((item) => item.studentId === studentId) || null,
    finance:
      finances.find((item) => item.studentId === studentId) || null,
    announcements,
  };
}