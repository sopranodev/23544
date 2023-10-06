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
    let res = Number(valor1) - Number(valor2);
    //console.log(res);

    //capturo el tag span por su id
    document.getElementById('res').innerHTML = res;
}
function dividir() {
    let valor1 = Number(document.getElementById('valor1').value);
    let valor2 = Number(document.getElementById('valor2').value);
    debugger
    if(valor2 !== 0) {
        let res = valor1 / valor2;
        //capturo el tag span por su id
        document.getElementById('res').innerHTML = res;
    }else {
        document.getElementById('res').innerHTML = 'No se puede dividir por 0'
    }
}