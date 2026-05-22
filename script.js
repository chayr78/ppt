let eleccion = "";

function jugar(opcionSeleccionada) {

    eleccion = opcionSeleccionada;

    let eleccioncom = random();

    gp(eleccion, eleccioncom);
}

function random() {

    let piedra = "piedra",
        papel = "papel",
        tijeras = "tijeras";

    let play = Math.floor(Math.random() * 3);

    if (play == 0) {
        return piedra;
    } else if (play == 1) {
        return papel;
    } else {
        return tijeras;
    }
}

function gp(eleccion, eleccioncom) {

    let res;

    if (eleccioncom == eleccion) {

        res = "🤝 Empate";

    } else if (
        eleccion == "piedra" && eleccioncom == "tijeras" ||
        eleccion == "papel" && eleccioncom == "piedra" ||
        eleccion == "tijeras" && eleccioncom == "papel"
    ) {

        res = "🎉 Ganaste";

    } else {

        res = "😢 Perdiste";
    }

    document.getElementById("resultado").innerHTML = res;
}