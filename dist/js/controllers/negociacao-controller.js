import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView", true);
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    add() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Data inserida não é dia útil!");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparForm();
    }
    limparForm() {
        this.inputData.value = "";
        this.inputData.focus();
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociacao feita cm sucesso!");
    }
    ehDiaUtil(data) {
        return data.getDay() != DiasDaSemana.DOMINGO || data.getDay() != DiasDaSemana.SABADO;
    }
}
