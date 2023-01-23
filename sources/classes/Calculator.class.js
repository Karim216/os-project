class Calculator
{
    #divContaint
    #icon
    #spanText

    constructor (){
        this.#divContaint = new CreateElement('div', {class: ['menu-item', 'menu-calculator'], soft: "calculator"})
        this.#icon = new CreateElement('i', {class: ['fa', 'fa-calculator'], hidden: true})
        this.#spanText = new CreateElement('span')
    }

    getElement(){
        return [this.#divContaint.element(), document.getElementsByClassName('.menu-calculator')]
    }
}