var convidados=[]
var quantidade=Number(prompt('Digite a quantidade de convidados'))
for (var i=0;i<quantidade;i++) {
    var nome= prompt('Digite o nome do convidado')
    var idade=Number(prompt('Digite a idade do convidado'))
    var cpf=prompt('Digite o cpf do convidado')
    convidados.push({nome:nome, idade:idade, cpf:cpf})
}
console.log(convidados)