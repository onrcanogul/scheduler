const express = require("express");
const {
  getByReceiver,
  getBySender,
  getById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointment-controller");

const router = express.Router();

router.get("/:id", getById);
router.get("/sender/:senderId", getBySender);
router.get("/receiver/:receiverId", getByReceiver);
router.post("/", createAppointment);
router.put("/", updateAppointment);
router.delete("/:id", deleteAppointment);

export default router;
