// import Soft from "./classes/Soft.class.js"

document.addEventListener("DOMContentLoaded", function() {
    // Création puis démarrage de l'application.

    const loadSoftware = new Soft()

    const calculator = new Calculator()
    

    console.log(loadSoftware.start())
    console.log(calculator.getElement())

});