const mongoose = require("mongoose");

const cropDiagnosisSchema = new mongoose.Schema(
    {
        farmerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        cropName: String,

        imageUrl: String,

        aiResult: {
            disease: String,
            confidence: Number,
            solution: String,
            medicines: [String]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("CropDiagnosis", cropDiagnosisSchema);