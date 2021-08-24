    var vlInss;
    var vlIrrf;
    var hr100;
    var hr50;
    var hrsa;
    var hrTotal;
    var dsr;
    var sBase;
    var sBruto;
    var sLiquido ;
    var percentInss;
    var percentIrrf;
    var percentLiquido;
    var percentDescontos;
    var faixaInss;
    var faixaIrrf;
    var fgtsMes;
    var totalDescontos;


    function calculaSalarioLiquido(){
        sLiquido = (sBruto - vlInss) - vlIrrf;
          
    }

    function calculaDsr(qtdHora, diasUteis, dmFeriados){
        dsr = ((calculaValorHora(sBase) * qtdHora) / diasUteis) * dmFeriados;
    }

    function calculaHora50() {
        let qtHoras = document.getElementById("hr50").value;
        parseFloat(sBase);        
        hr50 = ((sBase / 220) * qtHoras) + (((sBase / 220) * qtHoras)  * 0.5);
    }

    function calculaHora100() {
        let qtHoras = document.getElementById("hr100").value;
        hr100 = ((sBase / 220) * qtHoras) * 2 ;
        parseFloat(hr100);
    }

    function calculaHoraSa() {
        let qtHoras = document.getElementById("hrsa").value;
        hrsa = ((sBase / 220) * qtHoras) / 3 ;
        parseFloat(hrsa);
        
    }
    
    function calculaHorasTotal() {
        hrTotal = (hr50 + hr100) + hrsa;
        
              
    }

    function calculaInss(totalRecebido) {        
        if (totalRecebido > 6433.57) {
            vlInss = 751.99
            faixaInss = "Teto (R$ 751,99)";
        } 
        else if (totalRecebido > 3305.22) {
            vlInss = ((totalRecebido - 3305.23) * 0.14) + 132.20 + 99.31 + 82.50;
            faixaInss = "5ª faixa (14%)";
        } 
        else if (totalRecebido > 2203.48) {
            vlInss = ((totalRecebido -2203.49 ) * 0.12) + 99.31 + 82.50;
            faixaInss = "3ª faixa (12%)";
        } 
        else if (totalRecebido > 1100.02) {
            vlInss = ((totalRecebido - 1100.01) * 0.09) + 82.50;
            faixaInss = "2ª faixa (9%)";
        } 
        else if (totalRecebido < 1100.02) {
            vlInss = totalRecebido * 0.075;
            faixaInss = "1ª faixa (7,5%)";
            if(totalRecebido <= 0) {
                vlInss = 0;
            }
        }             
    }

    function calculaImpostoDeRenda(totalRecebido) {
        let total = totalRecebido - vlInss;
        if (total > 4664.68) {
            vlIrrf = (total * 0.275) - 869.36;
            faixaIrrf = "Teto (27,5%)";            
        } 
        else if (total >= 3751.06) {
            vlIrrf = (total * 0.225) - 636.13;
            faixaIrrf = "3ª faixa (22,5%)";            
        } 
        else if (total >= 2826.66) {
            vlIrrf = (total * 0.15) - 354.80;
            faixaIrrf = "2ª faixa (15%)";
        } 
        else if (total >= 1903.99) {
            vlIrrf = (total * 0.075) - 142.80;
            faixaIrrf = "1ª faixa (7,5%)";
        } 
        else if (total <= 1903.98) {
            vlIrrf = 0.0;
            faixaIrrf = "Isento"
        }
    }

    function calculaBruto(){
        sBruto = (sBase + hrTotal) ;
        
          
        
    }
    function calculaDescontos(){
        totalDescontos = vlInss + vlIrrf;
    }

    function calculaPercent(){
        percentInss = (100 / sBruto) * vlInss;
        percentIrrf = (100 / sBruto) * vlIrrf;
        percentLiquido = (100 / sBruto) * sLiquido;
        percentDescontos =  (100 / sBruto) * (vlInss + vlIrrf);
        fgtsMes = sBruto * 0.08;

    }
    
    function executa() {
        tiraSobmraBotao();
        calculaHora50();
        calculaHora100();
        calculaHoraSa();
        calculaHorasTotal();
        calculaBruto();
        calculaInss(sBruto);
        calculaImpostoDeRenda(sBruto);
        calculaDescontos();
        calculaSalarioLiquido();
        calculaPercent();
        
        
        document.getElementById('inss').innerHTML = "R$ " + transformaBRL(vlInss.toFixed(2)) + " (" + percentInss.toFixed(1) + " %)";
        document.getElementById('irrf').innerHTML = "R$ " + transformaBRL(vlIrrf.toFixed(2)) + " (" + percentIrrf.toFixed(1) + " %)";
        document.getElementById('bruto').innerHTML = "R$ " + transformaBRL(sBruto.toFixed(2));
        document.getElementById('liquido').innerHTML = "R$ " + transformaBRL(sLiquido.toFixed(2))  + " (" + percentLiquido.toFixed(1) + " %)";
        document.getElementById('fInss').innerHTML = faixaInss;
        document.getElementById('fIrff').innerHTML = faixaIrrf;
        document.getElementById('fgtsMes').innerHTML = "R$ " + fgtsMes.toFixed(2);
        document.getElementById('hrCinquenta').innerHTML = "R$ " + transformaBRL(hr50.toFixed(2));
        document.getElementById('hrCem').innerHTML = "R$ " + transformaBRL(hr100.toFixed(2));
        document.getElementById('hrSobreAviso').innerHTML = "R$ " + transformaBRL(hrsa.toFixed(2));
        document.getElementById('heTotal').innerHTML ="R$ " + transformaBRL(hrTotal.toFixed(2));
        document.getElementById('tDescontos').innerHTML ="R$ " + transformaBRL(totalDescontos.toFixed(2)) + " (" + percentDescontos.toFixed(1) + " %)"  ;
    }