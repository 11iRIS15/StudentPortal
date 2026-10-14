import { announcements } from "../data/announcements.data.js";

export function getAllAnnouncements() {
  return announcements;
}

export function getAnnouncementById(id) {
  return announcements.find((item) => item.id === Number(id)) || null;
}