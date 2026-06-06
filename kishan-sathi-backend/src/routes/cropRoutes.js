const express = require("express");

const {
  uploadCrop
} = require("../controllers/cropController");

const {
  protect,
  authorize
} = require("../middleware/authMiddleware");

const upload =
require("../middleware/uploadMiddleware");

const router = express.Router();

router.post(
  "/analyze",
  protect,
  authorize("farmer"),
  upload.single("image"),
  uploadCrop
);

module.exports = router;