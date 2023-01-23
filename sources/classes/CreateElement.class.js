class CreateElement
{
    #html
    
    constructor(element, attributs={}){
        this.#html = document.createElement(element);
    }

    element(){
        return this.#html
    }
}