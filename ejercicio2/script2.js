<<<<<<< HEAD

var fraseUsuario = prompt("Escribe una frase y te cuento las palabras que tiene");
cuentaPalabras (fraseUsuario);

function cuentaPalabras (fraseUsuario) {
    let numeroEspacios = 0, numeroPalabras = 0;
    for (let i = 0; i < fraseUsuario.length; i++) {
        if (fraseUsuario.charAt(i) === " ") {
            numeroEspacios ++;
        }
    }
    numeroPalabras = numeroEspacios + 1;
    alert("Tu frase tiene " + numeroPalabras + " palabras");
=======

var fraseUsuario = prompt("Escribe una frase y te cuento las palabras que tiene");
cuentaPalabras (fraseUsuario);

function cuentaPalabras (fraseUsuario) {
    let numeroEspacios = 0, numeroPalabras = 0;
    for (let i = 0; i < fraseUsuario.length; i++) {
        if (fraseUsuario.charAt(i) === " ") {
            numeroEspacios ++;
        }
    }
    numeroPalabras = numeroEspacios + 1;
    alert("Tu frase tiene " + numeroPalabras + " palabras");
>>>>>>> 6d9c964de1c0803f3ed9fbf3e8c38f0c2e2cfeff
}