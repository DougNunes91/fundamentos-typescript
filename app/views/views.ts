
// o generics é utilizado para os tipos de parametros dos metodos abaixo. O 'T' é definido pelas classes filhas 
export abstract class Views<T>{
    protected elemento: HTMLElement;
    protected escapar = false;

    // O '?' significa que é um parametro opcional, isto é, pode ou nao ser passado. Detalhe, sempre o insera no ultimo parametro
    constructor(seletor: string, escapar?: boolean){
        this.elemento = document.querySelector(seletor) as HTMLInputElement;
        this.escapar = escapar as boolean;
    }

    abstract update(model: T): void;

    protected abstract template(model: T): string;
}