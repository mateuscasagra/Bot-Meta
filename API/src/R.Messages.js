const _ = require("lodash");

const rMessagesButton = (request, reply) => {
  let { body } = request;
  let Mensagem = _.get(
    request.body,
    "entry[0].changes[0].value.messages[0].button.text"
  );
  return Mensagem;
};

const rMessagesList = (request) => {
  let { body } = request;
  let Mensagem = _.get(
    request.body,
    "entry[0].changes[0].value.messages[0].interactive.list_reply.title"
  );
  return Mensagem;
};

const rMessageFrom = (request) => {
  let { body } = request;
  let Mensagem = _.get(
    request.body,
    "entry[0].changes[0].value.messages[0].from"
  );
  return Mensagem;
};

const rMessage = (request) => {
  let { body } = request;
  let Mensagem = _.get(
    request.body,
    "entry[0].changes[0].value.messages[0].text.body"
  );
  return Mensagem;
};
const rMessageButtonReply = (request) => {
  let { body } = request;
  let Mensagem = _.get(
    request.body,
    "entry[0].changes[0].value.messages[0].interactive.button_reply.title"
  );
  return Mensagem;
};

module.exports = {
  rMessagesButton,
  rMessagesList,
  rMessageFrom,
  rMessage,
  rMessageButtonReply,
};
