//Valores padrão


//Pré -ES2015:

function exponencial(array, num){
    if(num === undefined){
        num = 1;
    }

    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i]**num);
    }

    return result;
}


exponencial([1,2,3,4])
// [1,2,3,4]

exponencial([1,2,3,4],4)
// [1,8,27,64]




//Pós-ES2015:

function exponencial(array, num = 1){
  const result = [];

    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i]**num);
    }

    return result;
}


exponencial([1,2,3,4])
// [1,2,3,4]

exponencial([1,2,3,4],4)
// [1,8,27,64]


//Objetivo "arguments"
// Um array com todos os parâmetros passados quando a função foi invocada.

function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i ++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}

//Spread: Uma forma de lidar separadmente com elementos

function sum(x,y,z){
    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));


//Rest: combina os arqumentos em um array

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho() // 0
confereTamanho(1,2) // 2
confereTamanho(3,4,5) // 3

// OBJETOS
//Object Destructuring

//Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

const user = {
    id:42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName:first, lastName:last}}){
    return `${first} ${last}`;
}

userId(user)
//42