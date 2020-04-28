var x = prompt("Digite o primeiro valor");
var y= prompt("Digite o segundo valor");
var soma=Number(x.value)+Number(y.value)
alert(`A soma dos dois valores deu ${soma}`)
if (soma>10) {
    console.log('Seu número é maior que 10')
} else{
    console.log('Seu número não é maior que 10')
}