function lerDatas(){
  var alvo = document.querySelector("#tx").value;
  var exp = /(\d\d\d\d)-(\d\d)-(\d\d)/g;
  var resultado = null;
  document.querySelector('p').innerHTML = "";
  
  while (resultado = exp.exec(alvo)){
  document.querySelector('p').innerHTML = document.querySelector("p").innerText + resultado + " ||" ;
  }
}


  