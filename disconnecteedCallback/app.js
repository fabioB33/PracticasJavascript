
class MyCustomElement extends HTMLElement{
    constructor(){
        super();
        console.log("Hola desde el construcot")
    }

    connectedCallback(){
        console.log("Hola desde el dom")
    }

    disconnectedCallback(){
        console.log("Adios del DOM")
    }
}

customElements.define("my-custome-element", MyCustomElement);

document.querySelector(" my-custome-element").remove()