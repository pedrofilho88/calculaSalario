
// function exibeData(data){
// 	var x = data.getDay();
// 	return x;
// }
var d = new Date(2021, 7, 0);
var x = d.getDate();

//var dia = new Date(2021, 5, 7);
console.log("pego: ", x);
executa();
function executa(){	
	var t = 0;
	for (var i=x; i >= 1; i--){
		let v = new Date(d.getFullYear(), d.getMonth(), i);
		if(v.getDay() == 0 || v.getDay() == 6){
			t++;
		}
	}
console.log("domingos/sabados -> ", t);
console.log("qtdDiasUteis -> ", x-t)
}



function formatarMoeda() {
	let elemento = document.getElementById('salarioBase');
	var valor = elemento.value;
	valor = valor + '';
	valor = parseInt(valor.replace(/[\D]+/g, ''));
	valor = valor + '';
	valor = valor.replace(/([0-9]{2})$/g, ",$1");
	if (valor.length > 6) valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
	elemento.value = valor;
	if(valor == 'NaN') elemento.value = '';
	// Converte a string para Float
	sBase = valor.replace(/[.]/g,'');
	sBase = sBase.replace(/,/g,'.');
	if(sBase == 'NaN') sBase = '';
	parseFloat(sBase);        
}




// function formataData(data) {
// 	var diaS = data.getDay();
// 	var diaM = data.getDate();
// 	var mes = data.getMonth();
// 	var ano = data.getFullYear();
// 	console.log("recebido: ",diaM);

//  switch (diaS) { //converte o numero em nome do dia
//  	case 0:
//  	diaS = "Domingo";
//  	break;
//  	case 1: 
//  	diaS = "Segunda-feira";
//  	break;
//  	case 2:
//  	diaS = "Terça-feira";
//  	break;
//  	case 3:
//  	diaS = "Quarta-feira";
//  	break;
//  	case 4:
//  	diaS = "Quinta-feira";
//  	break;
//  	case 5:
//  	diaS = "Sexta-feira";
//  	break;
//  	case 6:
//  	diaS = "Sabado";
//  	break;
//  }

//  switch (mes) { //converte o numero em nome do mês
//  	case 0:
//  	mes = "Janeiro";
//  	break;
//  	case 1:
//  	mes = "Fevereiro";
//  	break;
//  	case 2:
//  	mes = "Março";
//  	break;
//  	case 3:
//  	mes = "Abril";
//  	break;
//  	case 4:
//  	mes = "Maio";
//  	break;
//  	case 5:
//  	mes = "Junho";
//  	break;
//  	case 6:
//  	mes = "Julho";
//  	break;
//  	case 7:
//  	mes = "Agosto";
//  	break;
//  	case 8:
//  	mes = "Setembro";
//  	break;
//  	case 9:
//  	mes = "Outubro";
//  	break;
//  	case 10:
//  	mes = "Novembro";
//  	break;
//  	case 11:
//  	mes = "Dezembro";
//  	break;
//  }
 
//  if (diaM.toString().length == 1)
//  	diaM = "0"+diaM;
//  if (mes.toString().length == 1)
//  	mes = "0"+mes;
 
//  return diaS + ", " + diaM + "/" + mes + "/" + ano;
// }

// var d = new Date();
// var anoC = d.getFullYear();
// var mesC = d.getMonth();

// var d1 = new Date (anoC, mesC, 1);
// var d2 = new Date (anoC, mesC+1, 0);

// console.log(formataData(d1));
// console.log(formataData(d2));


















// var d = new Date();
// function capturaData(data){
// 	var dia = data.getDay();
// 	return dia;
// }
// console.log(capturaData(d));
