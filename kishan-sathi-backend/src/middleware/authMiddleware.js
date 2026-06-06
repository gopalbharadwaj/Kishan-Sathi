const jwt = require("jsonwebtoken");

exports.protect = async (
  req,
  res,
  next
) => {

  try {

    const authHeader =
      req.headers.authorization;

    const token =
      authHeader?.startsWith(
        "Bearer "
      )
        ? authHeader.split(" ")[1]
        : null;

    if (!token) {

      return res.status(401)
      .json({

        message:
          "No token provided"

      });

    }

    const decoded =
      jwt.verify(

        token,

        process.env.JWT_SECRET

      );

    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401)
    .json({

      message:
        "Invalid token"

    });

  }

};

exports.authorize =
(...roles) => {

  return (
    req,
    res,
    next
  ) => {

    if (
      !roles.includes(
        req.user.role
      )
    ) {

      return res.status(403)
      .json({

        message:
          "Access denied"

      });

    }

    next();

  };

};