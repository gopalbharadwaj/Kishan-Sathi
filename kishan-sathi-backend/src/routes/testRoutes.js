const express = require("express");

const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
    "/farmer",
    protect,
    authorize("farmer"),
    (req, res) => {

        res.json({
            message: "farmer Route"
        });

    }
);

router.get(
    "/doctor",
    protect,
    authorize("docter"),
    (req, res) =>{

        res.json({
            message: "Doctor Route"
        });
    }
);

module.exports = router;