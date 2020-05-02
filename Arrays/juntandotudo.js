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
console.log(nParesDobrados)
...
var carros = [{marca: 'Audi', cor: 'preto'},
 {marca: 'Audi', cor: 'branco'},
 {marca: 'Ford', cor: 'branco'},
 {marca: 'Ferarri', cor: 'vermelho'},
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
  console.log(agrupados)*/
  Array.prototype.groupBy = function(prop) {
    var value = this.reduce(function(total, item) {
    var key = item[prop];
    total[key] = (total[key] || []).concat(item);
    return total;
    }, {});
    return value;
   }
   var convidados = [
    {nome: 'Felipe', idade: 37, genero: 'masculino'},
    {nome: 'Amanda', idade: 17, genero: 'feminino'},
    {nome: 'João', idade: 27, genero: 'masculino'},
    {nome: 'Daniel', idade: 21, genero: 'masculino'},
    {nome: 'Helena', idade: 21, genero: 'feminino'}
   ];
   var convidadosFiltrados = convidados.sort(function(a, b) {
    return (a.nome > b.nome) ? 1 : -1; // 1 B precede A, -1 A precede B
   }).filter(function(item) {
    return item.idade >= 18;
   }).groupBy('genero');
   console.log(convidadosFiltrados);
   