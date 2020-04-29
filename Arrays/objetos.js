var convidado= {nome:'eneas', idade:16, genero:'masculino' ,nascimento:{dia:30, mes:09, ano:2003}}
var convidado1={nome:'enesio', idade:17, genero:'masculino', nascimento:{dia:29, mes: 09, ano:2003}}

var convidados=[]
convidados.push(convidado, convidado1)
delete convidado.idade
console.log(convidado)
