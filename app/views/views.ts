
// o generics é utilizado para os tipos de parametros dos metodos abaixo. O 'T' é definido pelas classes filhas 
export abstract class Views<T>{
    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    abstract update(model: T): void;

    protected abstract template(model: T): string;
}