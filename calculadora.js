let operacionActual = '';
let resultado = '';

function agregarNumero(numero) {
    resultado += numero;
    document.getElementById('resultado').value = resultado;
}

function operacion(op) {
    if (resultado !== '') {
        operacionActual += resultado + ' ' + op + ' ';
        resultado = '';
        document.getElementById('resultado').value = operacionActual;
    }
}

function calcular() {
    if (resultado !== '') {
        operacionActual += resultado;
    }
    try {
        resultado = eval(operacionActual.replace('^', '**'));
        document.getElementById('resultado').value = resultado;
        operacionActual = '';
    } catch (e) {
        document.getElementById('resultado').value = 'Error';
        operacionActual = '';
    }
}

function raizCuadrada() {
    if (resultado !== '') {
        resultado = Math.sqrt(parseFloat(resultado));
        document.getElementById('resultado').value = resultado;
    }
}

function potencia() {
    if (resultado !== '') {
        operacionActual += resultado + ' ^ ';
        resultado = '';
        document.getElementById('resultado').value = operacionActual;
    }
}

function borrar() {
    resultado = '';
    operacionActual = '';
    document.getElementById('resultado').value = '';
}
