function calcularBonus(){
   var assinatura = document.getElementById("assinatura").value;
   var faturamento = document.getElementById("faturamento").value;
   var bonus = 0 ;
var mensagem = "";

switch (assinatura){
     case "Basic":
      bonus = faturamento * 30/100;
     break;
     
     case "Silver":
         bonus = faturamento * 20/100;
      break;
      case "Gold" :
     
      bonus = faturamento *10/100;
      break;
      case "Platinum":
     
      bonus = faturamento *5/100;
      break;
     
      default:
          mensagem = "desculpe,mas não achei esse tipo de assinatura";
          break;
     }
     
          if(mensagem === ""){
     
     document.getElementById("mensagemBonus").textContent = "obrigado pela sua contração. o valor  a ser pago  é de: R$ " + bonus;
     
          }
      else{
     
     document.getElementById("mensagemBonus").textContent = mensagem;
     
      }
     



}


