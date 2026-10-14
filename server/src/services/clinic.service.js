import { clinicRecords } from "../data/clinic.data.js";

export function getClinicRecords(studentId) {
  return clinicRecords.find((item) => item.studentId === studentId) || null;
}