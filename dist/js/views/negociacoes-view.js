import { Views } from "./views.js";
export class NegociacoesView extends Views {
    template(model) {
        return `
        <table class = "table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                    <tr>
                        <td>${this.formatar(negociacao.data)}</td>
                        <td>${negociacao._quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `;
        }).join('')}
            </tbody>
        
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
