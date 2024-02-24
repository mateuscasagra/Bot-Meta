const Webhook = async (request, reply) => {
  try {
    let { query } = request;
    reply.send(request.query["hub.challenge"]);
    console.log("WebHook Conectado");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Webhook };
