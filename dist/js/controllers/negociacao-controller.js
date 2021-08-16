import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    add() {
        //eu uso um regex dentro do replace pegando todos os hífes. O g representa todos os hífes q existem na string.
        //Substitui todos os hífes para vírgula. Os inputs sempre retornam string quando usam a propriedade value
        //Os parses transformam de string para aquilo q vc desejar.
        // O vírgula é usado no parametro do construtor do Date pq ele só aceita virgula mesmo.
        // O input do tipo date retorna sempre com hífen as datas, entao removemos para virgula
        const negociacao = (new Negociacao(new Date(this.inputData.value.replace(/-/g, ",")), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value)));
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
    // getDay() retorna os dias da semana de 0 a 6, onde 0 é domingo e 6 é sabado
    ehDiaUtil(data) {
        return data.getDay() != DiasDaSemana.DOMINGO || data.getDay() != DiasDaSemana.SABADO;
    }
}
