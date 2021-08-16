import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView", true);

    constructor(){
        // vc precisa explicitar qual o tipo dessa variavel, ja q agr foi habilitado o "strictNullChecks" para true
        // ou seja, ele pode ser agr null ou HTMLInputElement, entao vc precisa fazer um casting para explicitar pra qual tipo vc quer 
        // fazendo desta forma, vc agr evita q as variaveis abaixo recebam null, e entao de compilacao serão apontados
        //Há duas maneiras diferentes:
        this.inputData = <HTMLInputElement>document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        
        
    }

    public add(): void{
        
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);

        if (!this.ehDiaUtil(negociacao.data)){

            this.mensagemView.update("Data inserida não é dia útil!");
            return;
            
        }

        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparForm();


    }

    private limparForm(): void{
        this.inputData.value = "";
        this.inputData.focus();
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociacao feita cm sucesso!");
    }

    // getDay() retorna os dias da semana de 0 a 6, onde 0 é domingo e 6 é sabado
    private ehDiaUtil(data: Date): boolean{
        return data.getDay() != DiasDaSemana.DOMINGO || data.getDay() != DiasDaSemana.SABADO;
    }
}