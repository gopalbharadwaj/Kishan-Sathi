const Notificatioin = require("../models/Notification");

exports.getNotifications = async ( req, res ) => {

    try {

        const notifications = await Notification.find({ 
            userId: req.user.id
        }).sort({ creatdAt: -1 });

        res.status(200).json({
            sucess: true,
            notifications
        });

    }catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.markAsRead = async (req, res) => {

    try{

        await Notificatioin.findByIdAndUpdate(
            req.prams.id,
            {
                isRead: true
            }
        );

        res.status(200).json({
            sucess: true
        });
    }catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};