var input = require('readline-sync')

function inicio(){
    console.log('Sequencia de Fibonacci.')
}
function fibo(valorA, valorB){
    let string = " "
    let valorC = 0

    for(let cont = 0 ; cont < 5; cont++){
        valorC =+ valorA + valorB
        valorA = valorB
        valorB = valorC
        string += "fib("+ (cont+2) +")=" + valorC + " "
    
    } 
    

    return string
}

//Declararação das Variaveis
let numA = 0
let numB = 0
let fibonacci = ""

//Input
inicio()
//numA = Number(input.question('Digite o valor 1: '))
numB = Number(input.question('Digite um valor: '))

//analizar dados e imprimir
fibonacci = "fib(0)="+numA + " " + "fib(1)=" + numB
fibonacci += fibo(numA, numB)

console.log(fibonacci)