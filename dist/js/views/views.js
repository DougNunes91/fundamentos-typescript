// o generics é utilizado para os tipos de parametros dos metodos abaixo. O 'T' é definido pelas classes filhas 
export class Views {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
}
