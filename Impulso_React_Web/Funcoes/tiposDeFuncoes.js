// Estutura da funcao

function nome(paremetros){
    //instruções
    return; //valor de retorno 
}

//Função Anônima

const soma = function (a,b){
    return a+b;
}

soma(1,2) //3
soma(5,4) //9

//Função autoinvocável

(
    function(){
        let name = "Digital Innovation One"
        return name;
    }
)();

//Digital Innovation One

//Funcção autoinvocável que recebe parâmetros

(
    function(a,b){
        return a + b;
    }
)(1,2);

//3

//Funcção autoinvocável que recebe parâmetros dentro de uma variável
const soma3 = (
    function(){
        return a + b;
    }
)(1,2);

console.log(soma3) //3


//Callbacks
//Uma função passada como argumento para outra.

const calc = function(operacao, num1, num2){
    return operacao(num1,num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1,2);
const resultSub = calc(sub, 1,2);

console.log(resultSub); //-1
console.log(resultSoma);//3