const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
// const cropRoutes = require("./routes/cropRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const chatRoutes = require("./routes/chatRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const rateLimit = require("express-rate-limit");
const { errorHandler } = require("./middleware/errorMiddleware");
const adminRoutes = require("./routes/adminRoutes");
const messageRoutes = require("./routes/messageRoutes.js");
const aiRoutes = require("./routes/aiRoutes");


const app = express();

const limiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    max: 100

});

const helmet = require("helmet");
const morgan = require("morgan");

app.use(cors());

app.use(express.json({
    limit: "50mb"
}));

app.use(express.urlencoded({
    limit: "50mb",
    extended: true
}));
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/notifications", notificationRoutes);
app.use(limiter);
app.use(helmet());
app.use(morgan("dev"));
app.use(errorHandler);
app.use("/api/admin", adminRoutes);
app.use("/api/message", messageRoutes);
// app.use("/api/crop", cropRoutes);
app.use("/api/ai", aiRoutes);




app.get("/", (req, res) => {
    res.send("kishan sathi API Running");
});

module.exports = app;