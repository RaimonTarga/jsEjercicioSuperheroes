
let letraNombre = {
    "a": {

        masculino: "La bestia",
        femenino: "La bestia",
    },
    "b": {

        masculino: "Agente",
        femenino: "Agente",
    },
    "c": {

        masculino: "Gigante",
        femenino: "Gigante",
    },
    "d": {

        masculino: "Pokemon",
        femenino: "Pokemon",
    },
    "e": {

        masculino: "Dragón",
        femenino: "Dragón",
    },
    "f": {

        masculino: "Alien",
        femenino: "Alien",
    },
    "g": {

        masculino: "Fantasma",
        femenino: "Fantasma",
    },
    "h": {

        masculino: "Doctor",
        femenino: "Doctora",
    },
    "i": {

        masculino: "Genio",
        femenino: "Genia",
    },
    "j": {

        masculino: "Chico",
        femenino: "Chica",
    },
    "k": {

        masculino: "Príncipe",
        femenino: "Princesa",
    },
    "l": {

        masculino: "Hombre",
        femenino: "Mujer",
    },
    "m": {

        masculino: "Gatito",
        femenino: "Gatita",
    },
    "n": {

        masculino: "Borracho",
        femenino: "Borracha",
    },
    "o": {

        masculino: "Rey",
        femenino: "Reina",
    },
    "p": {

        masculino: "Robot",
        femenino: "Robot",
    },
    "q": {

        masculino: "Científico",
        femenino: "Científica",
    },
    "r": {

        masculino: "Samurai",
        femenino: "Samurai",
    },
    "s": {

        masculino: "Mole",
        femenino: "Mole",
    },
    "t": {

        masculino: "Loco",
        femenino: "Loca",
    },
    "u": {

        masculino: "Vigilante",
        femenino: "Vigilante",
    },
    "v": {

        masculino: "Guerrero",
        femenino: "Guerrera",
    },
    "w": {

        masculino: "León",
        femenino: "Leona",
    },
    "x": {

        masculino: "Ángel",
        femenino: "Ángel",
    },
    "y": {

        masculino: "Tigre",
        femenino: "Tigresa",
    },
    "z": {

        masculino: "Saiyajin",
        femenino: "Saiyajin",
    },
};

let letraApellido = {
    "a": {

        masculino: "indestructible",
        femenino: "indestructible",
    },
    "b": {

        masculino: "maravilla",
        femenino: "maravilla",
    },
    "c": {

        masculino: "radiactivo",
        femenino: "radiactiva",
    },
    "d": {

        masculino: "volador",
        femenino: "voladora",
    },
    "e": {

        masculino: "mágico",
        femenino: "mágica",
    },
    "f": {

        masculino: "salvaje",
        femenino: "salvaje",
    },
    "g": {

        masculino: "vengador",
        femenino: "vengadora",
    },
    "h": {

        masculino: "letal",
        femenino: "letal",
    },
    "i": {

        masculino: "poderoso",
        femenino: "poderosa",
    },
    "j": {

        masculino: "amoroso",
        femenino: "amorosa",
    },
    "k": {

        masculino: "oscuro",
        femenino: "oscura",
    },
    "l": {

        masculino: "fantástico",
        femenino: "fantástica",
    },
    "m": {

        masculino: "invencible",
        femenino: "invencible",
    },
    "n": {

        masculino: "valiente",
        femenino: "valiente",
    },
    "o": {

        masculino: "superveloz",
        femenino: "superveloz",
    },
    "p": {

        masculino: "invisible",
        femenino: "invisible",
    },
    "q": {

        masculino: "mutante",
        femenino: "mutante",
    },
    "r": {

        masculino: "tóxico",
        femenino: "tóxica",
    },
    "s": {

        masculino: "sexy",
        femenino: "sexy",
    },
    "t": {

        masculino: "asesino",
        femenino: "asesina",
    },
    "u": {

        masculino: "karateka",
        femenino: "karateka",
    },
    "v": {

        masculino: "galáctico",
        femenino: "galáctica",
    },
    "w": {

        masculino: "carismático",
        femenino: "carismática",
    },
    "x": {

        masculino: "violento",
        femenino: "violenta",
    },
    "y": {

        masculino: "nocturno",
        femenino: "nocturna",
    },
    "z": {

        masculino: "venenoso",
        femenino: "venenosa",
    },
};

let fechaNacimiento = {
    "0": {

        masculino: "del espacio",
        femenino: "del espacio",
    },
    "1": {

        masculino: "de la justicia",
        femenino: "de la justicia",
    },
    "2": {

        masculino: "de Marvel",
        femenino: "de Marvel",
    },
    "3": {

        masculino: "de las tinieblas",
        femenino: "de las tinieblas",
    },
    "4": {

        masculino: "de fuego",
        femenino: "de fuego",
    },
    "5": {

        masculino: "de la noche",
        femenino: "de la noche",
    },
    "6": {

        masculino: "del futuro",
        femenino: "del futuro",
    },
    "7": {

        masculino: "de acero",
        femenino: "de acero",
    },
    "8": {

        masculino: "exterminador",
        femenino: "exterminadora",
    },
    "9": {

        masculino: "de otro planeta",
        femenino: "de otro planeta",
    },
};

const nombreValue = document.getElementById('nombreValue');
const apellidoValue = document.getElementById('apellidoValue');
const fechaValue = document.getElementById('fechaValue');
const resultContainer = document.getElementById('resultContainer');

function resolveName(){
    let nombre = nombreValue.value;
    let apellido = apellidoValue.value;
    let fecha = fechaValue.value;
    if (nombre!= null && apellido != null && fecha != null && document.querySelector('input[name="gender"]:checked') != null){
        let letraN = (nombre.slice(0,1)).toLowerCase();
        let letraA = (apellido.slice(0,1)).toLowerCase();
        let fechaN = fecha.slice(-1);
        let nombreCompleto = "";
        if (document.querySelector('input[name="gender"]:checked').id == "radioMasc"){
            nombreCompleto = (letraNombre[letraN].masculino + " " + letraApellido[letraA].masculino + " " + fechaNacimiento[fechaN].masculino)
        }
        else {
            nombreCompleto = (letraNombre[letraN].femenino + " " + letraApellido[letraA].femenino + " " + fechaNacimiento[fechaN].femenino)
        }
        resultContainer.innerHTML = `Tu nombre de superhero es: <b> ${nombreCompleto} </b>`;
    }
    else {
        resultContainer.innerHTML = "Error: los campos no pueden estar vacios";
    }
    
}


