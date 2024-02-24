const { default: axios } = require("axios");
const SendMessage = (messages) => {
  try {
    axios.post(messages.url, messages.data, { headers: messages.headers });
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = { SendMessage };
