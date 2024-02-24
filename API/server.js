const fastify = require("fastify");
const server = fastify();
const { Webhook } = require("./webhook");
const { Bot } = require("./bot");

server.get("/meta", Webhook);
server.post("/meta", Bot);

server.listen({ port: 3000, host: "0.0.0.0" }, function (error, addres) {
  if (error) {
    console.log(error);
    process.exit(1);
  } else {
    console.log(`rodando no endereço ${addres}`);
  }
});
