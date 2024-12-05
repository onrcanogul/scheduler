const express = require("express");
const {
  getByUserId,
  createAnalytics,
  updateAnalytics,
  deleteAnalytics,
} = require("../controllers/analytics-controller");

const router = express.Router();

router.get("/:userId/:type", getByUserId);
router.post("/", createAnalytics);
router.put("/", updateAnalytics);
router.delete("/:userId", deleteAnalytics);

export default router;
