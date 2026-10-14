import express from "express";
import {
  getAllAnnouncements,
  getAnnouncementById,
} from "../services/announcement.service.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getAllAnnouncements());
});

router.get("/:id", (req, res) => {
  const announcement = getAnnouncementById(req.params.id);

  if (!announcement) {
    return res.status(404).json({
      status: 404,
      title: "Not Found",
      detail: "Announcement not found",
    });
  }

  res.json(announcement);
});

export default router;