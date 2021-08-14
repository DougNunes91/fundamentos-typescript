import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacao } from "./models/negociacao.js";
const negociacao = new Negociacao(new Date, 10, 100);
const negociacaoController = new NegociacaoController();
const botao = document.querySelector("#botao");
botao.addEventListener("click", event => {
    event.preventDefault();
    negociacaoController.add();
});
