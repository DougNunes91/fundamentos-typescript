import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    /*Essa forma de declarar o array com seu generico é a forma mais antiga
    private negociacoes: Array<Negociacao> = [];
    */

    // a mais atual de declarar o array com o generics:
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    /* Spread Operator é uma forma antiga de evitar mutabilidade de objetos. Deixei comentado para conhecimento
    lista(): Array<Negociacao>{
        //[...] significa é spread operator, e q estou criando uma nova instancia de Array vazia
        // e pegando todos os elementos do this.negociacoes e transferindo para essa nova lista vazia
        // Resumindo: são duas instancias de Array. A primeira referencia conterá elementos através do emtodo adiciona()
        // Quando for chamado lista(), será criado uma outra referencia contendo os elementos da primeira referencia
        // O objetivo, é q quando lista() for chamado e for feito alguma remocao de elemento, será removido da segunda referencia
        // pois a primeira referencia permanecerá intacta, evitando a mutabilidade da primeira referencia
        return [...this.negociacoes];
    }*/


    /*ReadonlyeArray não permite que seja modificada essa lista 
    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }*/


    //É uma outra forma de simplificar o código e deixar mais moderno utilizando o typescript
    lista(): readonly Negociacao[]{
        return this.negociacoes;
    }

}