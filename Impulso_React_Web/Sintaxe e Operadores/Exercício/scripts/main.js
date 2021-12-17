var num1,num2;
var comparacao;


function conferirnum(num1, num2)
{
    var numero1 = Number.parseInt( document.getElementById(num1).value);
    var numero2 = Number.parseInt( document.getElementById(num2).value);

    ( numero1 == numero2) ? comparacao = "Os números " + numero1 + " e " + numero2 + " são iguais." : comparacao = "Os números " + numero1 + " e " + numero2 + " são diferentes.";
    var somanumeros = numero1 + numero2;
 
    var maioroumenor;
    (somanumeros > 10 && somanumeros < 20) ? maioroumenor = ", que é maior que 10 e menor que 20" : maioroumenor = ", que é menor que 10 e menor ou maior do que 20";
    
    return document.write(comparacao + " Sua soma é " + somanumeros +  maioroumenor);

}