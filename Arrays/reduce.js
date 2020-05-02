//reduce pode fazer uma função de agregação, pode se comportar como map ou filter
// callback-função que é executada em cada valor no array, recebe quatro argumentos:
//acumulador- o valor retornado na ultima invocação do callback.
//valorAtual- o elemmento atual que está sendo processado do array.
//indice- o indice do elemento atual que está sendo processado no array.
// array- o array ao qual a funça~oreduce foi chamada.
//valor inicial- opcional. objeto a ser usado como primeiro argumento da primeira chamada da função.

/*var valores= [1.5,2,4,10]
var somatoria= valores.reduce((total,item,indice) =>{
    total+item;
    console.log(`total:${total} Indice:${indice} Item:${item}`)},1)
console.log(somatoria)

var valores= [1.5,2,4,10]
var calc=function (total, item, indice, array) {
    total = total+item
    if (indice==array.length-1) {
        return total/array.length
    }
    return total
}
var media= valores.reduce(calc)
console.log(media)

var numeros=[1,2,3,4,5,6,7,8,9,10]
var dobrados= numeros.map((item)=>{return item*2})
console.log(dobrados)

var numeros=[1,2,3,4,5,6,7,8,9,10]
var calc= function (total,item) {
    
    return total.concat(item*2)//total torna-se um array
}
var dobrados= numeros.reduce(calc, [])
console.log(dobrados)*/
