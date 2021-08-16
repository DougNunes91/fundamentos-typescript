import { Views } from "./views.js";
export class MensagemView extends Views {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
