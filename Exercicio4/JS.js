let meninos = ["Alfredo", "Pedro", "Anastacio", "Waldisney",];
let meninas = ["Alexandrina", "Francisca", "Josefa", "Marinalva"];
let pares = meninos.length * meninas.length;
let i = 0;
//let u = 0;

while (i < meninos.length) {
    let o = 0;
    while (o < meninas.length) {
       console.log(`Casal:${meninos[i]} + ${meninas[o]}`)
        o++;

    }
    i++;
}
console.log(`${pares} casais`);