var numero = prompt('Digite um numero: ');

if (numero%2!=0){
    document.write('<h3 id= "falso">O número que você digitou:</h3> ' + '<h2 id= "num2">' + numero + '</h2>' + '<h1 id= "res2">Resultado: Impar</h>');

} else {
    document.write('<h3 id= "vdd">O número que você digitou:</h3>' + '<h2 id= "num1">' + numero +'</h2>' + '<h1 id= "res1">Resultado: Par</h1>');
}


