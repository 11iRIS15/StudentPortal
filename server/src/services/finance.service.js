import { finances } from "../data/finance.data.js";

export function getFinance(studentId) {
  return finances.find((item) => item.studentId === studentId) || null;
}