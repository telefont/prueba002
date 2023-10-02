JavaScript (script.js):
```javascript
function mostrarHora() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var horaActual = hora + ":" + minutos + ":" + segundos;

    document.getElementById("hora").innerHTML = horaActual;

    setTimeout(mostrarHora, 1000); // Actualiza la hora cada segundo
}

mostrarHora();
```