function transformaCampo ( idCampo ) {
   let elemento = document.getElementById( idCampo );
   let valor = elemento.value;
   valor = valor + '';
   valor = parseInt(valor.replace(/[\D]+/g, ''));
   valor = valor + '';
   valor = valor.replace(/([0-9]{2})$/g, ",$1");
   if (valor.length > 6) valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
   elemento.value = valor;
   if(valor == 'NaN') elemento.value = '';
   sBase = converteFloat(valor);       
}


function transformaBRL (vlr){
   vlr = parseInt(vlr.replace(/[\D]+/g, ''));
   vlr = vlr + '';
   vlr = vlr.replace(/([0-9]{2})$/g, ",$1");
   if (vlr.length > 6) vlr = vlr.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
   if(vlr == 'NaN') vlr = '';
   return vlr;
}

// Converte para numero (ex: 10000.21)
function converteFloat(vString){
    let vlFloat = vString.replace(/[.]/g,'');
    vlFloat = vlFloat.replace(/,/g,'.');
    if(vlFloat == 'NaN') vlFloat = '';
    vlFloat = parseFloat(vlFloat);
    return vlFloat;
}

function mudaAtributo (id, param){
    document.getElementById(id).setAttribute("style", param);
}

function colocaSombraBotao () {
    document.getElementById("botao").setAttribute("style", "box-shadow: 5px 5px 5px black;");
}

function tiraSobmraBotao (){
    document.getElementById("botao").setAttribute("style", "box-shadow: 0px 0px 0px black;");
    setInterval(colocaSombraBotao, 600);
    
}




// function troca(){
// setInterval(document.getElementsByClassName('ui-datepicker-close').setAttribute(name, "Feito"), 30);
// }

// function trocaNome(){
// troca();
// }

