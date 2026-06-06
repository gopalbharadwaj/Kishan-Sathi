const axios = require("axios");

exports.askAI = async (message) => {

  try {

    const response =
      await axios.post(

        "https://openrouter.ai/api/v1/chat/completions",

        {
          model: "openai/gpt-4o-mini",

          messages: [

            {
              role: "system",

              content: `
You are an expert agriculture assistant.

Help farmers with:

- Crop diseases
- Pest control
- Fertilizers
- Irrigation
- Farming advice

Give practical answers.
`
            },

            {
              role: "user",

              content: message
            }

          ]

        },

        {
          headers: {

            Authorization:
              `Bearer ${process.env.OPENROUTER_API_KEY}`,

            "Content-Type":
              "application/json"
          }
        }

      );

    return response.data.choices[0].message.content;

  } catch (error) {

    console.log(error.response?.data);

    throw new Error(
      "AI request failed"
    );

  }

};