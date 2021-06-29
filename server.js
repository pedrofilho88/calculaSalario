    let vlInss;
    let vlIrrf;
    let hrCem;
    let hrCinquenta;
    let hrSobreaviso;
    let dsr;
    var sBase;
    let sLiquido ;



    

    function calculaSalarioLiquido(){
        sLiquido = (sBase - vlInss) - vlIrrf;
    }

    function calculaDsr(qtdHora, diasUteis, dmFeriados){
        dsr = ((calculaValorHora(sBase) * qtdHora) / diasUteis) * dmFeriados;
    }

    function calculaValorHora(salario) {
        return salario / 220;
    }

    function calculaPlantao(qtHoras, multiplicador) {
        return qtHoras * multiplicador;
    }
    function calculaInss(totalRecebido) {        
        if (totalRecebido > 6433.57) {
            vlInss = 751.99
        } 
        else if (totalRecebido >= 3305.23) {
            vlInss = ((totalRecebido - 3305.23) * 0.14) + 132.20 + 99.31 + 82.50;
        } 
        else if (totalRecebido >= 2203.49) {
            vlInss = ((totalRecebido -2203.49 ) * 0.12) + 99.31 + 82.50;
        } 
        else if (totalRecebido > 1100.02) {
            vlInss = ((totalRecebido - 1100.01) * 0.09) + 82.50;
        } 
        else if (totalRecebido < 1100.01) {
            vlInss = totalRecebido * 0.075;
            if(totalRecebido <= 0) vlInss = 0;
        } 
                       
    }
    function calculaImpostoDeRenda(totalRecebido) {
        let total = totalRecebido - vlInss;
        if (total > 4664.68) {
            vlIrrf = (total * 0.275) - 869.36;            
        } 
        else if (total >= 3751.06) {
            vlIrrf = (total * 0.225) - 636.13;            
        } 
        else if (total >= 2826.66) {
            vlIrrf = (total * 0.15) - 354.80;
        } 
        else if (total >= 1903.99) {
            vlIrrf = (total * 0.075) - 142.80;
        } 
        else if (total <= 1903.98) {
            vlIrrf = 0.0;
        }
               
    }

    function calculaPercentInss(){

    }

    function executa() {
        //sBase = document.getElementById('salarioBase').value;
        //sBase = parseFloat(sBase);
        calculaInss(sBase);
        calculaImpostoDeRenda(sBase);
        calculaSalarioLiquido();
        document.getElementById('inss').innerHTML = "R$ " + vlInss.toFixed(2);
        document.getElementById('irrf').innerHTML = "R$ " + vlIrrf.toFixed(2);
        document.getElementById('bruto').innerHTML = "R$ " + sBase;
        document.getElementById('liquido').innerHTML = "R$ " + sLiquido.toFixed(2);
    }