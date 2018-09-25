let numero = Math.floor(Math.random() *50) + 1 ;
let chute = prompt("Entre 1 e 50, que numero vc acha que é?");
let i =0;

while(chute!=numero){
  chute=prompt("Entre 1 e 50, que numero vc acha que é?");
  i++;
  if(chute<numero){
      console.log("Você errou!! O numero é maior.")
  }
  if(chute>numero){
    console.log("Você errou!! O numero é menor.")
}
}
console.log("Você Acertou");