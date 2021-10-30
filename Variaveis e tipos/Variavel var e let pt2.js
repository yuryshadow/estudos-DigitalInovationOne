/* diferenciando let e var

numberOne = 1;

console.log(numberOne + 2);

let numberOne;

*/

var firstName = 'João';
let lastName = 'Souza';

if(firstName === 'João'){
    let lastName = 'Rodrigues';
    var firstName = 'Pedro';
    lastName = 'Silva';

    console.log(lastName);
}


console.log(firstName, lastName);