

export class Negociacao{
    
    // Qnd o meu construtor recebe parametros, eu posso simplificar desta forma.
    // Por debaixo dos panos, o typescript está criando as propriedades igualzinhas as q estão no parametro
    // Se estiver _data, será criado essa propriedade, como privada e sendo atribuida pelo valor q enviarem qnd for instancia-la
    constructor(
        private _data: Date, 
        public readonly _quantidade: number, 
        private _valor: number){}
    
    // aqui sempre vai retornar uma nova referencia contendo sempre a data passada no construtor para construcao do primeiro objeto
    // em outras palavras, a primeira referencia nunca será mais acessada e, consequentemente modificada, 
    // pois sempre será gerado e retornado uma nova referencia. Isso se chama programção defensiva.
    get data(): Date{
        return new Date(this._data.getTime());
    }
    

    /* Seu eu quiser, acesso os atributos sem os getters usando readonly no construtor. 
    Deixo como public e ngm pode alterar, pois é readonly.
    Vai ficar comentado como exemplo de que isso e possivel
    get quantidade(): number{
        return this._quantidade;
    }
    */

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this._valor * this._quantidade;
    }
}