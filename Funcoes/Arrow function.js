//Arrow function

//Sintaxe

//Função normal
const helloWorld = function(){
    return "Hello World";
}

//Arrow function
const helloWorld = () => {
    return "Hello World";
}

//Arrow function utilizando apenas uma linha
const helloWorld = () => "Hellow World"

//Caso existe apena suma linha, pode dispensar as chaves e return
//Caso existe apenas um parâmetro, pode dispensar os parênteses

const soma = (a,b) => a+b;

soma(2,4);
//6

// Outro exemplo
const soma = a => a;

soma(4);
4

//Obs a Arrow function NÃO faz hoisting!

//OUTRAS RESTRIÇÕES

// - "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;
// - Não existe o objeto "arguments";
// - O construtor (ex: new MeuObjeto()) também não pode ser utilizado.