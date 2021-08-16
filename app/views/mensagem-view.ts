import { Views } from "./views.js";

export class MensagemView extends Views<string>{



    protected template(model: string): string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

    // esse regex irá remover toda a tag <script>
    public update(model: string): void{
        let template = this.template(model);
        if (this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }

        this.elemento.innerHTML = template;
        
    }
}