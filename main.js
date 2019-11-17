import { tresEnRaya } from "./modulo.js";
class Grafica {
    constructor(NomJuego) {
        this.construirTablero(NomJuego)
        this.juego = new tresEnRaya();
        this.ganador = 0;
    }
    jugada(id) {
        var jugadorActual = this.juego.rellenarCelda(id);
        document.getElementById("jugadorActual").innerHTML = "<p>" + jugadorActual + "</p>";
        var resultadoJuego = this.juego.ganador();

        if (this.ganador == 0) {
            switch (resultadoJuego) {
                case 3: alert("juego terminado, no hay ganador , mas suerte la proxima vez jugadores"); this.ganador = resultadoJuego; break;
                case 1: alert("gana el jugador :" + resultadoJuego); this.ganador = resultadoJuego; break;
                case 2: alert("gana el jugador :" + resultadoJuego); this.ganador = resultadoJuego; break;
                case 0: alert("cambia el raton turno del jugador :" + jugadorActual); break
            }
            if (jugadorActual == 1) {
                document.getElementById("iden" + id + "").style.backgroundColor = "blue";
            } else {
                document.getElementById("iden" + id + "").style.backgroundColor = "red";
            }
        } else {
            alert("juego terminado deja de intentar jugar ")
        }

    }



    construirTablero(NomJuego) {
        //crea la tabla de juego mediante dom 
        var tabla = document.createElement("TABLE")
        var tblBody = document.createElement("tbody");
        let cont1 = 0;
        for (let i = 0; i < 3; i++) {
            var fila = document.createElement("tr");
            /*tabla+="<tr>";*/
            for (let z = 0; z < 3; z++) {
                /*tabla+="<td ><button id=\"iden"+cont1+"q"+cont2+"\" onclick=\"entorno.jugada("+cont1+","+cont2+")\"></td>";*/
                var celda = document.createElement("td");
                var att2 = document.createAttribute("onclick");
                att2.value = "" + NomJuego + ".jugada(" + cont1 + ")";
                var att = document.createAttribute("id");
                att.value = "iden" + cont1 + "";
                celda.setAttributeNode(att);
                celda.setAttributeNode(att2);
                fila.appendChild(celda);
                cont1++;
            }
            tblBody.appendChild(fila)
            /* tabla+="</tr>";*/
        }
        tabla.appendChild(tblBody);
        document.getElementById("juego").appendChild(tabla)
    }
}
window.tres = new Grafica("tres");