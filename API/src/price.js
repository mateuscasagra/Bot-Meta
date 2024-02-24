const _ = require("lodash");
const Dogprice = (request) => {
  let { body } = request;
  let dog = _.get(
    request.body,
    "entry[0].changes[0].value.messages[0].interactive.list_reply.title"
  );
  return dog === "Dog do Marcão"
    ? 25
    : dog === "Dog Strogonoff"
    ? 26
    : dog === "Dog Kids"
    ? 7
    : 19;
};
const Drinkprice = (request) => {
  let { body } = request;
  let drink = _.get(
    request.body,
    "entry[0].changes[0].value.messages[0].interactive.list_reply.title"
  );
  return drink === "Sem Bebida" ? 0 : 5;
};

module.exports = { Dogprice, Drinkprice };
