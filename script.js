function calcular() {
    let capital = Number(document.getElementById("Capital").value);
    let taxa = Number(document.getElementById("Taxa").value) / 100;
    let tempo = Number(document.getElementById("Tempo").value);
    let tipoJuros = Number(document.getElementById("tipoJuros").value);


    if (tipoJuros == 1) {
        let juros = capital * taxa * tempo;
        let montante = capital + juros;
        alert("Seu montante é R$" + montante + "\n" + "O juros é de R$" + juros);
    }


    else if (tipoJuros == 2) {

        let montanteC = capital * (1 + taxa) ** tempo;
        let jurosC = montanteC - capital;

        alert("Seu montante é: R$" + montanteC.toFixed(2) + "\n" + "O juros é de R$" + jurosC.toFixed(2));

    }

    else {
        alert("Você não selecionou o tipos de juros");
    }




    function limpar() {


        let capital = String(document.getElementById("capital").value = "");

        let taxa = String(document.getElementById("taxa").value = "");

        let tempo = String(document.getElementById("tempo").value = "");

        let tipo = String(document.getElementById("tipo").selectedIndex = "");



    }

}

