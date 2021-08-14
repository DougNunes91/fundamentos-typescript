import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor(){
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor")
        
    }

    add(): void{
        //eu uso um regex dentro do replace pegando todos os hífes. O g representa todos os hífes q existem na string.
        //Substitui todos os hífes para vírgula. Os inputs sempre retornam string quando usam a propriedade value
        //Os parses transformam de string para aquilo q vc desejar.
        // O vírgula é usado no parametro do construtor do Date pq ele só aceita virgula mesmo.
        // O input do tipo date retorna sempre com hífen as datas, entao removemos para virgula
        const negociacao = (new Negociacao(new Date(this.inputData.value.replace(/-/g, ",")), 
        parseInt(this.inputQuantidade.value), 
        parseFloat(this.inputValor.value)));
        this.negociacoes.adiciona(negociacao);
        this.limparForm();
    }

    limparForm(): void{
        this.inputData.value = "";
        this.inputData.focus();
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
    }
}