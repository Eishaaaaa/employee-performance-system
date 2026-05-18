const axios = require("axios");

exports.getRecommendation = async (req, res) => {
  try {
    const { employee } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: `
            Give promotion and training recommendation.

            Employee Details:
            ${JSON.stringify(employee)}
            `
          }
        ]
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({
      recommendation:
        response.data.choices[0].message.content
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};