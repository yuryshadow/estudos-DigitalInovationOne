var num1 = prompt("Insira o primeiro valor");
var num2 = prompt("Insira o segundo valor");
var comparacao;

conferirnum(num1, num2);

function conferirnum(num1, num2)
{
    ( num1 <= num2) ? comparacao = "Os numeros são iguais." : comparacao = "Os números são diferentes.";
    var somanumeros = num1 + num2;

    var maioroumenor;
    (somanumeros > 10 && somanumeros < 20) ? maioroumenor = "sua soma é maior do que 10 e menor do que 20" : maioroumenor = "sua soma é menor do que 10 e menor do que 20";
    
    return document.write(comparacao + " Sua soma é " + somanumeros + " e " + maioroumenor);
}