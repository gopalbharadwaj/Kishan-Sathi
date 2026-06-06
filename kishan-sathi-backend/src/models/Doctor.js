const mongoose =
require("mongoose");

const doctorSchema =
new mongoose.Schema(

  {

    name: {

      type: String,

      required: true

    },

    email: {

      type: String,

      required: true,

      unique: true

    },

    password: {

      type: String,

      required: true

    },

    specialization: {

      type: String,

      default:
        "Animal Specialist"

    },

    experience: {

      type: String,

      default: "2 Years"

    },

    image: {

      type: String,

      default:
"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"

    }

  },

  {

    timestamps: true

  }

);

module.exports =
mongoose.model(
  "Doctor",
  doctorSchema
);