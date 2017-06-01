/**
 * Created by Lucas on 01/06/2017.
 */


/*$('#element').popover('show');*/

function calcular() {

    var pBA = document.getElementById('pBA').value;
    var pA = document.getElementById('pA').value;
    var pB = document.getElementById('pB').value;

    var pAB = (pBA * pA) / pB;

    document.getElementById('resultado').innerHTML = "<b>P(A | B) = " + pAB + "</b>";
    document.getElementById('conclusao').innerHTML = "<b>Aqui vai ser a conclusão  de " + (pAB * 100) + "\%</b>";
}