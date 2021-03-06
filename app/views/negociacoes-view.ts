import { Negociacoes } from "../models/negociacoes.js";
import { Views } from "./views.js";

export class NegociacoesView extends Views<Negociacoes>{



    // retorna um template (q é o html abaixo), mapeia cada objeto para um string, o map retorna um array de strings
    // e o join ajunta(concatena) tudo em uma string separando cada elemento por nada, q seria o ('').
    // new Intl.DateTimeFormat().format(negociacao.data): estou criando uma instancia para DateTimeFormat
    // e formatando a data para o formato padrão de localidade do navegador do usuário
    protected template(model: Negociacoes): string{
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
                ${model.lista().map(negociacao =>{
                    return `
                    <tr>
                        <td>${this.formatar(negociacao.data)}</td>
                        <td>${negociacao._quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `
                }).join('')}
            </tbody>
        
        `;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }

    
    update(model: Negociacoes): void {
        //recebe em string o innerHTML e transforma em elemento HTML
        this.elemento.innerHTML = this.template(model);
    }
}