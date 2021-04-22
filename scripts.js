/*
Ordena 3 números de mayor a menor
Permutaciones con 3 elementos
Posibilidades 3! = 3*2*1 = 6
abc - 321
acb - 312
bac - 231
bca - 132
cab - 213
cba - 123
*/

const numbers = document.getElementById('numbers');                /* aqui se mete lo que es el numero */
const result = document.getElementById('result');                  /* aqui se da el resultado obtenido despues de haber metido los tres numeros*/
let a=prompt('Introduzca el primer número');                       /* aqui se mete el primer numero almacendado*/
let b=prompt('Introduzca el segundo número');                      /* aqui se mete el segundo numero almacenad0*/
let c=prompt('Introduzca el tercer número');                       /* aqui se mete el tercer numero almacendo*/
numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`  /* aqui se mete lo que es la ecuacion de ver que numero es mayor*/


/* aqui comienza lo que son las combinaciones del a, b, c donde se dara los resultados posibles para que haya el orden de mayor a menor*/
if(a>=b && a>=c){
    if(b>c){
        result.textContent = `El orden es: ${a}, ${b}, ${c}`
    }else{
        result.textContent = `El orden es: ${a}, ${c}, ${b}`
    }
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent = `El orden es: ${b}, ${a}, ${c}`
    }else{
        result.textContent = `El orden es: ${b}, ${c}, ${a}`
    }
}else if(c>=a && c>=b){
    if(a>b){
        result.textContent = `El orden es: ${c}, ${a}, ${b}`
    }else{
        result.textContent = `El orden es: ${c}, ${b}, ${a}`
    }
}