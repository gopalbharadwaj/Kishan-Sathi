const {
  askAI
} = require(
  "../services/openRouterService"
);

exports.chatWithAI =
async (req, res) => {

  try {

    const { message } =
      req.body;

    const reply =
      await askAI(message);

    res.json({

      success: true,

      reply

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        error.message

    });

  }

};