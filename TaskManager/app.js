function zero(x) {
  if (x < 10) {
      x = '0' + x;
  } return x;
}
var timCCAM = (document.getElementById("timCCAN").onclick = function () {
  if (timCCAM.cheked) {
    alert("Internal Error !!!");
  } else {
    var resultado = document.getElementById("ccanTim");
    var dataTo = new Date();
    var dia = dataTo.getDate();
    var mes = dataTo.getMonth();
    var ano = dataTo.getFullYear();
    var horas = dataTo.getHours(2);
    var minutos = dataTo.getMinutes(2);
    
    horas = zero(horas);
    minutos = zero(minutos);

    resultado.innerHTML =
      " - Task completed on " + dia + "/" + mes + "/" + ano + " - " + horas + ":" + minutos;
      
    var resultAlert =
      " Task completed on " + dia + "/" + (mes + 1) + "/" + ano + " - " + horas + ":" +  minutos;
    alert(resultAlert);
  };
  
})
var timREC = (document.getElementById("timREC").onclick = function () {
  if (timREC.cheked) {
    alert("Internal Error !!!");
  } else {
    var resultado = document.getElementById("recTim");
    var dataTo = new Date();
    var dia = dataTo.getDate();
    var mes = dataTo.getMonth();
    var ano = dataTo.getFullYear();
    var horas = dataTo.getHours(2);
    var minutos = dataTo.getMinutes(2);
    
    horas = zero(horas);
    minutos = zero(minutos);


    resultado.innerHTML =
      " - Task completed on " + dia + "/" + mes + "/" + ano + " - " + horas + ":" + minutos;
    var resultAlert =
      " Task completed on " + dia + "/" + (mes + 1) + "/" + ano + " - " + horas + ":" +  minutos;
    alert(resultAlert);
  };
  
})
var timAtivo = (document.getElementById("timAtivo").onclick = function () {
  if (timAtivo.cheked) {
    alert("Internal Error !!!");
  } else {
    var resultado = document.getElementById("ativoTim");
    var dataTo = new Date();
    var dia = dataTo.getDate();
    var mes = dataTo.getMonth();
    var ano = dataTo.getFullYear();
    var horas = dataTo.getHours(2);
    var minutos = dataTo.getMinutes(2);
    horas = zero(horas);
    minutos = zero(minutos);
    
    resultado.innerHTML =
      " - Task completed on " + dia + "/" + mes + "/" + ano + " - " + horas + ":" + minutos;
    var resultAlert =
      " Task completed on " + dia + "/" + (mes + 1) + "/" + ano + " - " + horas + ":" +  minutos;
    alert(resultAlert);
  };
  
})

