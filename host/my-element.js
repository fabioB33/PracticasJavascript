
class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode : "open"});

        
    }
    static get observedAttributes(){
        return ["title", "parrafo", "img"];
    }


    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML =`
        <section>
            <h1>
            <slot name ="title"></slot>
            </h1>
            <p>
            <slot name="parrafo"></slot>
            </p>
        </section>
        ${this.getStyles()}`;
        return template;
    }

    getStyles(){
        return `
            <style>:host {
                display: inline-block;
                width: 100%;
                min-width: 300px;
                max-width: 450px;
                font-size: 20px;
                background: grey;

            } 
            :host(.blue) {
                background :blue;
            }
            :host([yellow]) h1 {
                color:grey;
            }
            :host([yellow]) p {
                color:red;
            }
            :host([yellow]) {
                background :yellow;
            }
            
            :host-context(article.card) {
                display: block;
                max-width: 100%;
            }
            </style>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(True));
    }
    connectedCallback(){
        this.render()
        }
}

customElements.define('my-element', myElement);