const Message =
  require("../models/message");

const User =
  require("../models/User");

const Appointment =
  require("../models/Appointment");

// SEND MESSAGE

const sendMessage =
  async (req, res) => {

    try {

      const {
        sender,
        receiver,
        text
      } = req.body;

      const message =
        await Message.create({

          sender,
          receiver,
          text

        });

      res.status(201).json(
        message
      );

    } catch (error) {

      res.status(500).json({

        message:
          "Message Send Failed"

      });

    }

  };

// GET MESSAGES

const getMessages =
  async (req, res) => {

    try {

      const {
        senderId,
        receiverId
      } = req.params;

      const messages =
        await Message.find({

          $or: [

            {
              sender: senderId,
              receiver: receiverId
            },

            {
              sender: receiverId,
              receiver: senderId
            }

          ]

        }).sort({

          createdAt: 1

        });

      res.json(messages);

    } catch (error) {

      res.status(500).json({

        message:
          "Failed To Fetch Messages"

      });

    }

  };

// GET CONTACTS

const getContacts =
  async (req, res) => {

    try {

      const userId =
        req.params.userId;

      const user =
        await User.findById(
          userId
        );

      let appointments = [];

      if (
        user.role === "farmer"
      ) {

        appointments =
          await Appointment.find({

            farmerId: userId,

            status: "accepted"

          }).populate(
            "doctorId",
            "-password"
          );

        const contacts =
          appointments.map(
            (a) =>
              a.doctorId
          );

        return res.json(
          contacts
        );

      }

      appointments =
        await Appointment.find({

          doctorId: userId,

          status: "accepted"

        }).populate(
          "farmerId",
          "-password"
        );

      const contacts =
        appointments.map(
          (a) =>
            a.farmerId
        );

      res.json(
        contacts
      );

    } catch (error) {

      res.status(500).json({

        message:
          "Failed To Fetch Contacts"

      });

    }

  };

module.exports = {

  sendMessage,

  getMessages,

  getContacts

};