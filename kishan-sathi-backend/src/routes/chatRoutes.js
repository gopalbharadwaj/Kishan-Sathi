const express = require("express");

const {  createChat,  sendMessage,  getMessages } = require("../controllers/chatController");

const {  protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post(  "/",  protect,  createChat );

router.post(  "/message",  protect,  sendMessage );

router.get(  "/:chatId/messages",  protect,  getMessages );

module.exports = router;