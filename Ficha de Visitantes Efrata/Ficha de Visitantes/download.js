function frequencia() {
    var frequenciaSimNao = document.getElementsByName("group");
    var len = frequenciaSimNao.length;

    for (i=0;i<len;i++){
        if (frequenciaSimNao[i].checked){
            var teste = frequenciaSimNao[i].value
            console.log(teste);
        } 
    }

    return teste

};

function comoConheceu() {
    var comoConheceuEfrata = document.getElementsByName("group2");
    var len = comoConheceuEfrata.length;

    for (i=0;i<len;i++){
        if (comoConheceuEfrata[i].checked){
            var conheceu = comoConheceuEfrata[i].value;
            console.log(conheceu)
        }
    }
    return conheceu
};


function salvar() {
    var name = document.getElementById("name").value;
    var endereco = document.getElementById("endereco").value;
    var tel = document.getElementById("tel").value;
    var tel2 = document.getElementById("tel2").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var dateVisita = document.getElementById("dateVisita").value;
    
    let blob = new Blob([name + ";" + endereco + ";" + tel + ";" + tel2 + ";" + email + ";" + frequencia() +
     ";" + date + ";" + dateVisita + ";" + comoConheceu()], {type: "text/plain; charset=UTF-8;"})

    saveAs(blob, "teste.csv")



}

