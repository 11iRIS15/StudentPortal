import { libraryRecords } from "../data/library.data.js";

export function getLibraryRecords(studentId) {
  return libraryRecords.find((item) => item.studentId === studentId) || null;
}