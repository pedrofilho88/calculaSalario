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

function converteFloat(vString){
    let vlFloat = vString.replace(/[.]/g,'');
    vlFloat = vlFloat.replace(/,/g,'.');
    if(vlFloat == 'NaN') vlFloat = '';
    parseFloat(vlFloat);
    return vlFloat;
}