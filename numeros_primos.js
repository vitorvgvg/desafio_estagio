var listaDeNumeros = [];

function numerosPrimos(x){
    for(let numero = 2; numero <= x; numero++){
        let yPrimo = true;

        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                yPrimo = false;
                break;
            }

        }
        if (yPrimo){
            listaDeNumeros.push(numero);
            console.log("p("+numero+")= [" + listaDeNumeros +"]");

        }
    }
}

numerosPrimos(30);