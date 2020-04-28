var valores=[]
while (true) {
    var valor= prompt('Digite um npumero ou S para sair')
    if (valor=='S') {
        break
    } else{
        valores.push(Number(valor))
    }
}
var soma=0
for(var i=0;i<valores.length;i++){
    soma+=valores[i]
}
var resultado=soma/valores.length
console.log(resultado);