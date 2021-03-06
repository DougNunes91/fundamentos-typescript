export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._valor * this._quantidade;
    }
    static criaDe(data, valor, quantidade) {
        return new Negociacao(new Date(data.replace(/-/g, ",")), parseInt(valor), parseFloat(quantidade));
    }
}
