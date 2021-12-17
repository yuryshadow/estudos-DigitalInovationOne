//This: O que é ?

//A palavra resevada this é uma referência de contexto.
//No exemplo abaixo, this refere-se ao objetivo pessoa.

const pessoa1 = {
    firstName: "Andre",
    lastName: "Soares",
    id:1,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

pessoa1.fullName();
// "André Soares"

pessoa1.getId();
// 1


// Call

const pessoa = {
    nome: `Miguel`,
};

const animal = {
    nome: `Murphy`,
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(animal);

// outro Exemplo

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1,5);
//12


//Apply

const pessoa = {
    nome: 'Mighel',
};

const animal = {
    nome: 'Godi'
}

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(animal);

// outro exemplo

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1,5]);
//12

//Bind

//Clona a estrura da função onde é chamado e aplic ao valor do objeto passado como parâmetro

const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno();
// Bruno