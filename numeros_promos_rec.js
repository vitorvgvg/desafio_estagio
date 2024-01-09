var listaDeNumeros = [];

function numerosPrimos(x){
    for(let numero = 2; numero <= x; numero++){
            
            if(NumeroPrimo(numero)) {
                listaDeNumeros.push(numero)
                console.log("p("+numero+")= [" + listaDeNumeros +"]");
            }
     }
}


function NumeroPrimo(numero){

    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
}

numerosPrimos(13);