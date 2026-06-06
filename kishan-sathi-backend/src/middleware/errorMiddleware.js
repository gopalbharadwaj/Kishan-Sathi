exports.errorHandler = (err, req, res, next) =>{

    res.status( err.statusCode || 500 ).json({

        sucess: false,

        message: err.message || "Server Error"

    });

};