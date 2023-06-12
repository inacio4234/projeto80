nomeMatriz = [];

function enviar(){

    var mostrarMatriz = [];

    for (var j=1; j<=4; j++) {
        var nomeAluno = document.getElementById("nome" + j).value;
        console.log(nomeAluno);
        nomeMatriz.push(nomeAluno);
    }


    console.log(nomeMatriz);

    var comprimento = nomeMatriz.length;
    console.log(comprimento);

    for (var k=0; k<comprimento; k++){
        mostrarMatriz.push("<h4> Nome : " + nomeMatriz[k] + "</h4>");
        console.log(mostrarMatriz);
    }

    document.getElementById("nomesComVirgulas").innerHTML = mostrarMatriz;

    var remove = mostrarMatriz.join(" ");
    document.getElementById("nomesSemVirgulas").innerHTML = remove;

    document.getElementById("btnEnviar").style.display = "none";
    document.getElementById("btnOrganizar").style.display = "inline-block";
}

function organizar(){
    nomeMatriz.sort();
    console.log(nomeMatriz);

    var mostrarOrganizado = [];
    var comprimento = nomeMatriz.length;
    console.log(comprimento);

    for (var k=0; k<comprimento; k++){
        mostrarOrganizado.push("<h4> Nome : " + nomeMatriz[k] + "</h4>");
        console.log(mostrarMatriz);
    }


    var remove = mostrarOrganizado.join(" ");
    document.getElementById("nomesSemVirgulas").innerHTML = remove;
}

function novaAtualizacao(){
    document.getElementById("nomesSemVirgulas").innerHTML="<h1>"+ nomeMatriz + "</h1>";
}