//Mensagens que iram ser enviadas pelo bot

const { Pedido } = require("./Pedido");

const tokenvalue =
  "EAAZA1N2zDj6EBO2Pa6yvHkQok8O1efwWFOBmDAlsXvVUqVdvQO8AScupgYuxav5EKG8ix4zVpzRnvWRdWLZBhyIZCDH6LtCm7nZCJEkXCuebZBizhfIpFgXe3v1ZA2BITpV0uLxRRCV8kr7Umggtr7fMzM4vSdM1mudzPgxTCWGSMtVO5xgKtWMg5Bx8BGmuiQ";

const sMessages = {
  Saudacao: {
    data: {
      messaging_product: "whatsapp",
      to: "5541984953092",
      type: "template",
      template: { name: "bemvindo", language: { code: "pt_BR" } },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  Cardapio: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "text",
      text: {
        preview_url: false,
        body: `0`,
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  EscolhaDog: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "interactive",
      interactive: {
        type: "list",
        header: {
          type: "text",
          text: "",
        },
        body: {
          text: "*Escolha seu DOG aqui*😋👇 ",
        },
        footer: {
          text: "",
        },
        action: {
          button: "Hot Dogs",
          sections: [
            {
              title: "Hot Dogs",
              rows: [
                {
                  id: "SECTION_1_ROW_1_ID",
                  title: "Dog do Marcão",
                },
                {
                  id: "SECTION_1_ROW_2_ID",
                  title: "Dog Strogonoff",
                },
                {
                  id: "SECTION_1_ROW_3_ID",
                  title: "Dog Calabresa ",
                },
                {
                  id: "SECTION_1_ROW_4_ID",
                  title: "Dog Bacon  ",
                },
                {
                  id: "SECTION_1_ROW_5_ID",
                  title: "Dog Frango  ",
                },
                {
                  id: "SECTION_1_ROW_6_ID",
                  title: "Dog Lombinho  ",
                },
                {
                  id: "SECTION_1_ROW_7_ID",
                  title: "Dog Kids",
                },
              ],
            },
          ],
        },
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  EscolhaQueijo: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "interactive",
      interactive: {
        type: "list",
        header: {
          type: "text",
          text: "",
        },
        body: {
          text: "*Qual queijo você deseja?*",
        },
        footer: {
          text: "",
        },
        action: {
          button: "Queijos",
          sections: [
            {
              title: "Queijos",
              rows: [
                {
                  id: "SECTION_1_ROW_1_ID",
                  title: "Cheddar",
                },
                {
                  id: "SECTION_1_ROW_2_ID",
                  title: "Quatro Queijos",
                },
                {
                  id: "SECTION_1_ROW_3_ID",
                  title: "Creem Cheese ",
                },
                {
                  id: "SECTION_1_ROW_4_ID",
                  title: "Catupiry ",
                },
                {
                  id: "SECTION_1_ROW_5_ID",
                  title: "Sem Queijo",
                },
              ],
            },
          ],
        },
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  EscolhaRefri: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "interactive",
      interactive: {
        type: "list",
        header: {
          type: "text",
          text: "",
        },
        body: {
          text: "*Gostaria de algo para tomar?*",
        },
        footer: {
          text: "",
        },
        action: {
          button: "Bebidas",
          sections: [
            {
              title: "Refrigerantes",
              rows: [
                {
                  id: "SECTION_1_ROW_1_ID",
                  title: "Coca-Cola",
                  description: "Lata 250ML|5 reais",
                },
                {
                  id: "SECTION_1_ROW_2_ID",
                  title: "Pepsi",
                  description: "Lata 250ML|5 reais",
                },
                {
                  id: "SECTION_1_ROW_3_ID",
                  title: "Guaraná",
                  description: "Lata 250ML|5 reais",
                },
                {
                  id: "SECTION_1_ROW_4_ID",
                  title: "Sem Bebida",
                },
              ],
            },
          ],
        },
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  Observacao: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "text",
      text: {
        preview_url: false,
        body: "*Tem alguma observação sobre o seu pedido?*",
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  Endereco: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "text",
      text: {
        preview_url: false,
        body: "*Tudo bem! Agora informe seu endereço de entrega com ponto de referência por gentiliza*",
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  Nome: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "text",
      text: {
        preview_url: false,
        body: "*Um nome para chamar*",
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  valortotal: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "text",
      text: {
        preview_url: false,
        body: `*Ficou um total de ${Pedido.Valor}*`,
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },

  Pagamento: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "interactive",
      interactive: {
        type: "list",
        header: {
          type: "text",
          text: "",
        },
        body: {
          text: `*Qual seria a forma de pagamento?*`,
        },
        footer: {
          text: "",
        },
        action: {
          button: "Pagamento",
          sections: [
            {
              title: "...",
              rows: [
                {
                  id: "SECTION_1_ROW_1_ID",
                  title: "Pix",
                },
                {
                  id: "SECTION_1_ROW_2_ID",
                  title: "Cartão",
                },
                {
                  id: "SECTION_1_ROW_3_ID",
                  title: "Dinheiro",
                },
              ],
            },
          ],
        },
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  Troco: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "interactive",
      interactive: {
        type: "button",
        body: {
          text: "*Vai precisar de troco?*",
        },
        action: {
          buttons: [
            {
              type: "reply",
              reply: {
                id: "UNIQUE_BUTTON_ID_1",
                title: "Sim",
              },
            },
            {
              type: "reply",
              reply: {
                id: "UNIQUE_BUTTON_ID_2",
                title: "Não",
              },
            },
          ],
        },
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  TrocoQuantidade: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "text",
      text: {
        preview_url: false,
        body: "*Troco pra quanto?*",
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  Tudobem: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "text",
      text: {
        preview_url: false,
        body: "*Tudo bem vamos começar a preparar seu pedido!*",
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
  Mensagemfinal: {
    data: {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "5541984953092",
      type: "text",
      text: {
        preview_url: false,
        body: `*Pedido*📋\n*Telefone*: ${Pedido.Telefone} \n*Dog*: ${Pedido.Dog} \n*Queijo*: ${Pedido.Queijo} \n*Bebida*: ${Pedido.Bebida} \n*Observação*: ${Pedido.Observacao} \n*Nome*: ${Pedido.Nome} \n*Endereço*: ${Pedido.Endereco} \n*Pagamento*: ${Pedido.Pagamento} \n*Troco para*: ${Pedido.Troco}
          `,
      },
    },
    token: `Bearer ${tokenvalue}`,
    url: "https://graph.facebook.com/v17.0/142299858975390/messages",
    headers: {
      Authorization: `Bearer ${tokenvalue}`,
      "Content-Type": "application/json",
    },
  },
};

module.exports = { sMessages, tokenvalue };
