var convidado={
    nome:'eneas',
    idade:16,
    id:0
}
var convidados=[convidado]
var novoConvidado=Object.create(convidado)
convidados.push(novoConvidado)
console.log(novoConvidado.nome)