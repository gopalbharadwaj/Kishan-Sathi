const express =
require("express");

const {

  bookAppointment,

  getMyAppointments,

  acceptAppointment,

  rejectAppointment,

  getDoctorPatients

} = require(
  "../controllers/appointmentController"
);

const {

  protect,

  authorize

} = require(
  "../middleware/authMiddleware"
);



const router =
express.Router();

// Farmer Book Appointment

router.post(
  "/",
  protect,
  authorize("farmer"),
  bookAppointment
);

// Farmer / Doctor Appointments

router.get(
  "/my",
  protect,
  getMyAppointments
);

router.get(
  "/doctor-patients",
  protect,
  authorize("doctor"),
  getDoctorPatients
);

// Doctor Accept

router.put(
  "/accept/:id",
  protect,
  authorize("doctor"),
  acceptAppointment
);

// Doctor Reject

router.put(
  "/reject/:id",
  protect,
  authorize("doctor"),
  rejectAppointment
);

module.exports =
router;