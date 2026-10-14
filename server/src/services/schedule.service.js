import { schedules } from "../data/schedule.data.js";

export function getSchedule(studentId) {
  return schedules.filter((item) => item.studentId === studentId);
}