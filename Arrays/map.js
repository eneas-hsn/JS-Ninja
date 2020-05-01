/*var numeros=[1,2,3,4,5,6,7,8,9]
var multiplica=function (item) {
    return item*2
}
var multiplicaN=numeros.map(multiplica)
console.log(multiplicaN)

var fahrenheit=[0,32,45,46,47,91,93,121]
var celcius= function(item) {
    return (item-32)*5/9
}
var conversão=fahrenheit.map(celcius)
console.log(conversão)*/

var convidados= [
    {nome:'eneas', idade:16},
    {nome:'enesio', idade:18},
    {nome:'saene',idade:20}
]
var nomesCA=convidados.map(function (item) {
    
    return Object.assign(item,{nome:item.nome.toUpperCase()})
    
})
console.log(nomesCA)