const express =
require("express");

const router =
express.Router();

const {

  registerDoctor,

  loginDoctor,

  getDoctors,

  getDoctorById

} = require(
  "../controllers/doctorController"
);

// Register

router.post(
  "/register",
  registerDoctor
);

// Login

router.post(
  "/login",
  loginDoctor
);

// Get All Doctors

router.get(
  "/all",
  getDoctors
);

// Get Single Doctor

router.get(
  "/:id",
  getDoctorById
);

module.exports =
router;