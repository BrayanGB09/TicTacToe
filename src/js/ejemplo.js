const victoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
]; 

function validarVictoria() {

let accion = false;

let ganador = false;

for (let index = 0; index < celdas.length; index++) {
    const condicion = celdas[index]
        const celda0 = contenedor[condicion[0]];
        const celda1 = contenedor[condicion[1]];
        const celda2 = contenedor[condicion[2]];

    if (celda0 == "" || celda1 == "" || celda2 == "") {
        continue;
    }

    if (celda0 == celda1 && celda1 == celda2) {
        ganador = true;
        break;
    }
}

    if (ganador) {
    alert("¡Has ganado!")
    accion = false;
    
    }
    else if (lista.includes("")) {
    alert("¡Empate!")
    }
    else{

    }
}


