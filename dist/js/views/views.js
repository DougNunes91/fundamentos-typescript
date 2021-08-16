export class Views {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        this.escapar = escapar;
    }
}
