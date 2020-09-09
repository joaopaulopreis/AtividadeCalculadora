window.alert('Bem-vindo a calculadora em JavaScript');

var opcao = parseInt(window.prompt('Calculadora\n\nDigite 1-soma\n 2-Subtralção\n 3-Multiplicação\n 4-Divisão\n 5-Potencia'));

var n1 = parseFloat(window.prompt('Digite o primeiro numero: '))
var n2 = parseFloat(window.prompt('Digite o primeiro numero: '))
var resultado;

switch(opcao){
    case 1:
        resultado = n1 + n2;
        window.alert('Resultado: '+ resultado)
        break;
    case 2:
        resultado = n1 - n2;
        window.alert('Resultado: '+ resultado)
        break;
    case 3:
        resultado = n1 * n2;
        window.alert('Resultado: '+ resultado)
        break;
    case 4:
        resultado = n1 / n2;
        window.alert('Resultado: '+ resultado)
        break;
    case 5:
        resultado = Math.pow(n1,n2)
        window.alert('Resultado: '+ resultado)
        break;
    default:
        window.alert('Opção invalida')
}