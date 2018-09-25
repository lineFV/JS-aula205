let salario= prompt("Qual a sua renda");
let idade= prompt("Qual a sua idade");
let emprestimo = prompt("Qual o valor do empréstimo");

if (idade > 21 && idade < 55 && salario >= 1000 && emprestimo <=(15 * salario)&& emprestimo>500 ){
  let parcelas= prompt ("Em quantas parcelas quer pagar?Deve ser entre 3 e 24 parcelas");
  if (parcelas>3 && parcelas<24){
      console.log("Empréstimo aprovado");
      console.log(`Parcelas: ${parcelas}`);
      console.log (`${((emprestimo/parcelas)*0.085)+(emprestimo/parcelas)}`);
  }else{
    console.log("Deve ser entre 3 e 24 parcelas.");
    parcelas= prompt ("Em quantas parcelas quer pagar?Deve ser entre 3 e 24 parcelas");
  }
}else{
  console.log("Empréstimo negado");
}