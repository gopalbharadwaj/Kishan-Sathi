const express =
require("express");

const router =
express.Router();

const {

  sendMessage,

  getMessages,

  getContacts

} = require(
  "../controllers/messageController"
);

router.post(
  "/send",
  sendMessage
);

router.get(
  "/contacts/:userId",
  getContacts
);

router.get(
  "/:senderId/:receiverId",
  getMessages
);

module.exports =
router;