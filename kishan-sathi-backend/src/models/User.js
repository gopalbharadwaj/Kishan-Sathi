const mongoose =
    require("mongoose");

const userSchema =
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

            role: {

                type: String,

                enum: [
                    "farmer",
                    "doctor"
                ],

                default:
                    "farmer"

            },

            specialization: {

                type: String,

                default: ""

            },

            experience: {

                type: String,

                default: ""

            },

            summary: {

                type: String,

                default: ""

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
        "User",
        userSchema
    );