let numero = 10;
let chute = prompt("Que numero vc acha que é?");
let i =0;

while(chute!=numero){
  chute=prompt("Que numero vc acha que é?");;
  i++;
  if(chute>numero){
      console.log("Você errou!! O numero é maior.")
  }
  if(chute<numero){
    console.log("Você errou!! O numero é menor.")
}
}

console.log("Você Acertou");