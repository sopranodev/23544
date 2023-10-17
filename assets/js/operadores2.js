/*
    SUMAR DOS NUMEROS Y MOSTARLO POR PANTALLA
*/
//crear una funcion "nuestra propia" no nativa
function sumarv1() {
    let valor1 = prompt('valor1');
    let valor2 = prompt('valor2');
    let res = Number(valor1) + Number(valor2);
    console.log(res);
}
function sumar() {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let res = Number(valor1) + Number(valor2);
    //console.log(res);

    //capturo el tag span por su id
    document.getElementById('res').innerHTML = res;
}

function restar() {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    debugger;
    let res = Number(valor1) - Number(valor2);
    //console.log(res);

    //capturo el tag span por su id
    document.getElementById('res').innerHTML = res;
}
function dividir() {
    let valor1 = getValorById('valor1'); //string
    let valor2 = getValorById('valor2');
    debugger;
    let res = '';
    if(valor1 !== '' && valor2 !== '') {
        valor1 = Number(valor1);//number
        valor2 = Number(valor2);

        if(valor2 !== 0) {
            res = valor1 / valor2;
        }else {
            res = 'No se puede dividir por 0';
        }
    }
    actualizarContenido('res',res);
}

function actualizarContenido(id, nuevoContenido) {
    document.getElementById(id).innerHTML = nuevoContenido;
}
/*
    Retorna el valor dado su id 
*/
function getValorById(id) {
    //uso el D.O.M para capturar el valor del tag html
    return document.getElementById(id).value;
}
function calcular(operacion) {

}
