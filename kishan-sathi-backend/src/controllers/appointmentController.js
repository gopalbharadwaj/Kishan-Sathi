const Appointment =
  require("../models/Appointment");

const {
  sendNotification
} = require("../utils/sendNotification");

const crypto =
  require("crypto");

// BOOK APPOINTMENT

exports.bookAppointment =
  async (req, res) => {

    try {

      const roomId =
        crypto.randomUUID();

      const appointment =
        await Appointment.create({

          farmerId:
            req.user.id,

          doctorId:
            req.body.doctorId,

          animalType:
            req.body.animalType,

          problemDescription:
            req.body.problemDescription,

          appointmentDate:
            req.body.appointmentDate,

          meetingRoomId:
            roomId

        });

      await sendNotification({

        userId:
          req.body.doctorId,

        title:
          "New Appointment",

        message:
          "A farmer booked an appointment"

      });

      res.status(201).json({

        success: true,

        appointment

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  };

// GET MY APPOINTMENTS

exports.getMyAppointments =
  async (req, res) => {

    try {

      let appointments;

      // Farmer

      if (
        req.user.role ===
        "farmer"
      ) {

        appointments =
          await Appointment.find({

            farmerId:
              req.user.id

          })

            .populate(
              "doctorId"
            );

      }

      // Doctor

      else if (
        req.user.role ===
        "doctor"
      ) {

        appointments =
          await Appointment.find({

            doctorId:
              req.user.id

          })

            .populate(
              "farmerId"
            );

      }

      res.status(200).json({

        success: true,

        appointments

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  };

// ACCEPT APPOINTMENT

exports.acceptAppointment =
  async (req, res) => {

    try {

      const appointment =
        await Appointment.findByIdAndUpdate(

          req.params.id,

          {

            status:
              "accepted"

          },

          {

            new: true

          }

        );

      res.status(200).json({

        success: true,

        appointment

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  };

// REJECT APPOINTMENT

exports.rejectAppointment =
  async (req, res) => {

    try {

      const appointment =
        await Appointment.findByIdAndUpdate(

          req.params.id,

          {

            status:
              "cancelled"

          },

          {

            new: true

          }

        );

      res.status(200).json({

        success: true,

        appointment

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  };

exports.getDoctorPatients =
  async (req, res) => {

    try {

      const appointments =
        await Appointment.find({

          doctorId:
            req.user.id,

          status:
            "accepted"

        })

          .populate(
            "farmerId"
          );

      res.status(200).json({

        success: true,

        patients:
          appointments

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  };