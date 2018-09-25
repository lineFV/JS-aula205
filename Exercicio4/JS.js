let meninos = ["Alfredo", "Pedro", "Anastacio", "Waldisney"];
let meninas = ["Alexandrina", "Francisca", "Josefa", "Marinalva"];
let pares = meninos.length * meninas.length;
let i = 0;
let o = 0;
//let u = 0;
let boy = meninos[i];

while (i < meninos.length) {
    console.log(i);
    console.log(meninos[i])
    i++;
    while (o < meninas.length) {
       // console.log(`${boy} + ${meninas[o]}`)
        o++;

    }
}
console.log(`${pares} casais`);