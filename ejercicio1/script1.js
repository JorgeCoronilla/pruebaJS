menu();

function menu() {
    var opcionOK = false;
    do {
        var opcion = prompt("Elige una de las siguientes opciones\n1. numeros\n2.letras");
        if (opcion == 1) {
            opcionOK = true;
            opcion1();
        }

        if (opcion == 2) {
            opcionOK = true;
            opcion2();
        } else {
            alert("Esa no es una opción correcta");

        }
    } while (!opcionOK);

}
function opcion1() {
    /*var num1OK = false, num2OK = false;
    alert("Necesitaremos dos números. \nTe voy a decir si son pares y/o múltiplos de 25");
    do {
        let num1 = prompt("Dame el primer número");
        if (parseInt(num1) !== "NaN") {
           num1OK = true;                       
        } alert("Eso no es un número correcto");
    } while (!num1OK);

    var num1OK = false, num2OK = false;
    do {
        let num1 = prompt("Dame el primer número");
        if (parseInt(num1) === NaN) {
       alert("Eso no es un número correcto" + parseInt(num1) + num1OK);
        } else { num1OK = true;
               alert("El numero es correcto"+ parseInt(num1) + num1OK);}
        } while (!num1OK);
    */
        var num1OK = false, num2OK = false; let a = "NaN";
       
    var num1esPar = false, num2esPar = false, num1EsMultiplo = false, num2EsMultiplo = false;
    var num1Mensaje = "", num2Mensaje = "", mensajeFinal = "";
    do {
        let num1 = prompt("Dame el primer número");
        if (!isNaN(num1)) { 
            num1OK = true;
            alert("El numero es correcto");
        } else {
            alert("Eso no es un número correcto");
        }}
       while (!num1OK);j
   
       do {
        let num2 = prompt("Dame el primer número");
        if (!isNaN(num1)) { 
            num2OK = true;
            alert("El numero es correcto");
        } else {
            alert("Eso no es un número correcto");
        }}
       while (!num1OK);j
    if (num1 % 2 == 0) { num1esPar = true; }
    if (num1 / 25 > 0 && Number.isInteger(num1)) { num1EsMultiplo = true; }
    if (num2 % 2 == 0) { num2esPar = true; }
    if (num2 / 25 > 0 && Number.isInteger(num2)) { num2EsMultiplo = true; }
    if (num1esPar && num1EsMultiplo && num2esPar && num2EsMultiplo) {
        mensajeFinal = "Los dos numeros son pares y multiplos de 25";
        alert("Los dos pares y múltiplos");
    } else {
        if (num1esPar) {
            num1Mensaje = "El primer número es par ";
        } else { num1Mensaje = "El primer número no es par" }
        if (num1EsMultiplo) {
            num1Mensaje = num1Mensaje + " y es múltiplo de 25";
        } else {
            num1Mensaje = num1Mensaje + " y no es múltiplo de 25";
        }
        if (num2esPar) {
            num2Mensaje = "El segundo número es par ";
        } else { num2Mensaje = "El segundo número no es par" }
        if (num2EsMultiplo) {
            num2Mensaje = num2Mensaje + " y es múltiplo de 25";
        } else {
            num2Mensaje = num2Mensaje + " y no es múltiplo de 25";
        }

    }
    mensajeFinal = num1Mensaje + ". " + num2Mensaje;
    alert(mensajeFinal);
}

function opcion2() {
    alert("En esta opción necesito una frase\n vamos a comprobar si empieza o acaba por a");
    var frase = prompt("Escribe tu frase");
    if (frase.charAt(0) === 'a' || frase.charAt(0) === 'A') {
        alert("Tu frase empieza por a");
    } else {
        alert("Tu frase no empieza por a");
    }
    if (frase.charAt((frase.length - 1)) === 'a' || frase.charAt((frase.length - 1)) === 'a') {
        alert("Tu frase termina por a");
    } else {
        alert("Tu frase no termina por a");
    }

}