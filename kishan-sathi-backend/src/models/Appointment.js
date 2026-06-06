const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        farmerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        animalType: String,

        problemDescription: String,

        appointmentDate: Date,

        status: {
            type: String,
            enum: [
                "pending",
                "accepted",
                "completed",
                "cancelled"
            ],
            default: "pending"
        },

        meetingRoomId: String

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Appointment", appointmentSchema);