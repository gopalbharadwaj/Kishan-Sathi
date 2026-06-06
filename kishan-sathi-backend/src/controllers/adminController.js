const User = require("../models/User");
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");

exports.getDashboardStats = async ( req, res) =>{

    try{

        const totalUser = await User.countDocuments();

        const totalDoctors = await Doctor.countDocuments();

        const totalAppointments = await Appointment.countDocuments();

        res.status(200).json({

            sucess: {
                totalUsers,
                totalDoctors,
                totalAppointments
            }

        });
    } catch (error) {

        res.status(500).json({

            message: error.message

        });
    }
    
};