const bcrypt =
require("bcryptjs");

const jwt =
require("jsonwebtoken");

const User =
require("../models/User");

// REGISTER DOCTOR

const registerDoctor =
async (req, res) => {

  try {

    const {

      name,

      email,

      password,

      specialization,

      experience,

      summary,

      image

    } = req.body;

    const existingDoctor =
    await User.findOne({
      email
    });

    if (existingDoctor) {

      return res.status(400)
      .json({

        message:
        "Doctor Already Exists"

      });

    }

    const hashedPassword =
    await bcrypt.hash(
      password,
      10
    );

    const doctor =
    await User.create({

      name,

      email,

      password:
      hashedPassword,

      role:
      "doctor",

      specialization,

      experience,

      summary,

      image

    });

    res.status(201).json({

      success: true,

      doctor

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
      "Doctor Register Failed"

    });

  }

};

// LOGIN DOCTOR

const loginDoctor =
async (req, res) => {

  try {

    const {

      email,

      password

    } = req.body;

    const doctor =
    await User.findOne({

      email,

      role: "doctor"

    });

    if (!doctor) {

      return res.status(404)
      .json({

        message:
        "Doctor Not Found"

      });

    }

    const isMatch =
    await bcrypt.compare(

      password,

      doctor.password

    );

    if (!isMatch) {

      return res.status(400)
      .json({

        message:
        "Invalid Credentials"

      });

    }

    const token =
    jwt.sign(

      {

        id: doctor._id,

        role: doctor.role

      },

      process.env.JWT_SECRET,

      {

        expiresIn: "7d"

      }

    );

    res.status(200).json({

      success: true,

      token,

      doctor

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
      "Doctor Login Failed"

    });

  }

};

// GET ALL DOCTORS

const getDoctors =
async (req, res) => {

  try {

    const doctors =
    await User.find({

      role: "doctor"

    }).select("-password");

    res.status(200).json(
      doctors
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
      "Failed To Fetch Doctors"

    });

  }

};

// GET SINGLE DOCTOR

const getDoctorById =
async (req, res) => {

  try {

    const doctor =
    await User.findById(
      req.params.id
    ).select("-password");

    if (!doctor) {

      return res.status(404)
      .json({

        message:
        "Doctor Not Found"

      });

    }

    res.status(200).json(
      doctor
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
      error.message

    });

  }

};

module.exports = {

  registerDoctor,

  loginDoctor,

  getDoctors,

  getDoctorById

};
