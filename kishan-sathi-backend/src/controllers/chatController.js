const Chat = require("../models/Chat");
const Message = require("../models/Chat");
const message = require("../models/message");

exports.createChat = async (req, res) => {

    try{

        const { receiverId } = req.body;

        let existingChat = await Chat.findOne({

            members: {
                $all: [
                    req.user.id,
                    receiverId
                ]
            }

        });

        if(existingChat) {
            return res.status(200).json(existingChat);
        }

        const chat = await Chat.create({

            member: [
                req.user.id,
                receiverId
            ]

        });

        res.status(201).json(chat);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

exports.sendMessage = async ( req, res ) =>{

    try{

        const { chatId, receiverId, message } = req.body;

        const newMessage = await Message.create({

            chatId,

            senderId,
            
            message

        });

        await Chat.findByIdAndUpdate(
            chatId,
            {
                lastMessage: message
            }
        );

        res.status(201).json(
            newMessage
        );

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

exports.getMessages = async ( req, res ) =>{

    try {

        const message = await Message.find({

            chatId: req.params.chatId

        });

        res.status(200).json(
            messages
        );

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }
};