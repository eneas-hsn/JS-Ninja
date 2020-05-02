/*var numeros= [10,18,1,15,2,12,21,33,100]
var pares= function (item) {
    if (item%2==0) {
        return item
    } 
}
var dobrados= function (item) {
    return item*2
}
var nParesDobrados= numeros.filter(pares).map(dobrados)
console.log(nParesDobrados)*/
var carros = [{marca: 'Audi', cor: 'preto'},
 {marca: 'Audi', cor: 'branco'},
 {marca: 'Ferarri', cor: 'vermelho'},
 {marca: 'Ford', cor: 'branco'},
 {marca: 'Peugot', cor: 'branco'}];
 function groupBy(array,prop) {
     var value= array.reduce(function (total,item) {
         var key=item[prop]//item marca
         total[key]= (total[key] || []).concat(item)
         return total
     }, {})
     return value
 }
  var agrupados=groupBy(carros,'marca')
  console.log(agrupados)