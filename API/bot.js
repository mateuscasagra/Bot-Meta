//npm run dev
const { SendMessage } = require("./src/axios");
const pool = require("./src/Database");
const { flow } = require("./src/flow");
const { Pedido } = require("./src/Pedido");
const { Dogprice, Drinkprice } = require("./src/price");
const { priceobj } = require("./src/priceobject");
const {
  rMessagesButton,
  rMessagesList,
  rMessageFrom,
  rMessage,
  rMessageButtonReply,
} = require("./src/R.Messages");
const { sMessages } = require("./src/S.Messages");

const Bot = async (request) => {
  let WhatsappListMessage = rMessagesList(request);
  let WhatsappButtonMessage = rMessagesButton(request);
  let PhoneNumber = rMessageFrom(request);
  let WhatsappMessage = rMessage(request);
  let WhatsappButtonReply = rMessageButtonReply(request);
  let valorBebida = Drinkprice(request);
  let valorLanche = Dogprice(request);
  let a = false;
  const message = { ...sMessages };
  message.Mensagemfinal.data.text.body = `*Pedido*📋\n*Telefone*: ${Pedido.Telefone} \n*Dog*: ${Pedido.Dog} \n*Queijo*: ${Pedido.Queijo} \n*Bebida*: ${Pedido.Bebida} \n*Observação*: ${Pedido.Observacao} \n*Nome*: ${Pedido.Nome} \n*Endereço*: ${Pedido.Endereco} \n*Pagamento*: ${Pedido.Pagamento} \n*Valor*: ${Pedido.Valor} \n*Troco para*: ${Pedido.Troco}`;
  message.valortotal.data.text.body = `*Ficou um total de ${Pedido.Valor} reais*`;
  //message.Saudacao.data.to = PhoneNumber;

  if (request && flow.hello) {
    SendMessage(sMessages.Saudacao);
    flow.hello = false;
    flow.cardapio = true;
    Pedido.Telefone = PhoneNumber;
    console.log("Telefone:", Pedido.Telefone);
  } else if (WhatsappButtonMessage === "Cardápio" && flow.cardapio) {
    pool.query("SELECT * FROM tabelas_cardapio", (err, result) => {
      if (err) {
        console.error("Erro na consulta:", err);
      } else if (result && result.rows) {
        const cardapioItems = result.rows.map((item) => {
          const descricaoLanche = `*${item.lanche} ${item.valor}R$*:`;
          const ingredientes = item.descricao ? `(${item.descricao})` : "";
          return `${descricaoLanche}${ingredientes ? "\n" + ingredientes : ""}`;
        });

        const mensagemCardapio = cardapioItems.join("\n\n");
        message.Cardapio.data.text.body = `${mensagemCardapio}`;
        SendMessage(sMessages.Cardapio);
      } else {
        console.error("Nenhum resultado retornado da consulta.");
      }
    });
    flow.cardapio = false;
    flow.escolhacardapio = true;
  } else if (flow.escolhacardapio) {
    SendMessage(sMessages.EscolhaDog);
    flow.escolhacardapio = false;
    flow.queijo = true;
  } else if (WhatsappListMessage !== undefined && flow.queijo) {
    SendMessage(sMessages.EscolhaQueijo);
    Pedido.Dog = WhatsappListMessage;
    priceobj.valorlanche = valorLanche;
    console.log(priceobj.valorlanche);
    console.log("Dog:", Pedido.Dog);
    flow.queijo = false;
    flow.refri = true;
  } else if (WhatsappListMessage !== undefined && flow.refri) {
    SendMessage(sMessages.EscolhaRefri);
    Pedido.Queijo = WhatsappListMessage;
    console.log("Queijo:", Pedido.Queijo);
    flow.refri = false;
    flow.obs = true;
  } else if (WhatsappListMessage !== undefined && flow.obs) {
    SendMessage(sMessages.Observacao);
    Pedido.Bebida = WhatsappListMessage;
    priceobj.valorbebida = valorBebida;
    console.log("a", priceobj.valorbebida);
    console.log("Bebida:", Pedido.Bebida);
    flow.obs = false;
    flow.endereco = true;
  } else if (WhatsappMessage !== undefined && flow.endereco) {
    SendMessage(sMessages.Endereco);
    Pedido.Observacao = WhatsappMessage;
    Pedido.Valor = priceobj.valorlanche + priceobj.valorbebida;
    console.log("Valor do pedido", Pedido.Valor);
    console.log("Observação do pedido:", Pedido.Observacao);
    flow.endereco = false;
    flow.nome = true;
  } else if (WhatsappMessage !== undefined && flow.nome) {
    SendMessage(sMessages.Nome);
    Pedido.Endereco = WhatsappMessage;
    console.log("Endereço:", Pedido.Endereco);
    flow.nome = false;
    flow.valor = true;
  } else if (WhatsappMessage !== undefined && flow.valor) {
    SendMessage(sMessages.valortotal);
    Pedido.Nome = WhatsappMessage;
    console.log("Nome:", Pedido.Nome);
    flow.valor = false;
    flow.pagamento = true;
  } else if (flow.pagamento) {
    SendMessage(sMessages.Pagamento);
    flow.pagamento = false;
    flow.troco = true;
  } else if (flow.troco) {
    switch (WhatsappListMessage) {
      case "Pix":
        SendMessage(sMessages.Tudobem);
        flow.troco = false;
        Pedido.Pagamento = WhatsappListMessage;
        console.log("Forma de pagamento:", Pedido.Pagamento);
        Pedido.Troco = "0";
        flow.mensagemfinal = true;
        break;
      case "Cartão":
        SendMessage(sMessages.Tudobem);
        flow.troco = false;
        Pedido.Pagamento = WhatsappListMessage;
        console.log("Forma de pagamento:", Pedido.Pagamento);
        Pedido.Troco = "0";
        flow.mensagemfinal = true;
        break;
      case "Dinheiro":
        SendMessage(sMessages.Troco);
        flow.troco = false;
        flow.trocoquantidade = true;
        Pedido.Pagamento = WhatsappListMessage;
        console.log("Forma de pagamento:", Pedido.Pagamento);
        break;
    }
  } else if (flow.trocoquantidade) {
    switch (WhatsappButtonReply) {
      case "Sim":
        SendMessage(sMessages.TrocoQuantidade);
        flow.trocoquantidade = false;
        flow.tudobem = true;
        break;
      case "Não":
        SendMessage(sMessages.Tudobem);
        flow.trocoquantidade = false;
        console.log("Pedido", Pedido);
        Pedido.Troco = "0";
        flow.mensagemfinal = true;
        break;
    }
  } else if (WhatsappMessage !== undefined && flow.tudobem) {
    Pedido.Troco = WhatsappMessage;
    SendMessage(sMessages.Tudobem);
    flow.tudobem = false;
    flow.mensagemfinal = true;
    console.log(Pedido.Troco);
  } else if (flow.mensagemfinal) {
    SendMessage(message.Mensagemfinal);
    flow.mensagemfinal = false;
  }
};
module.exports = { Bot };
