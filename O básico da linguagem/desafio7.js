var inicio=Number(prompt('Digite o inicio'))
var final=Number(prompt('Digite o final'))
var incremento=Number(prompt('Digite o incremento'))
for(var x=inicio;x<final;x=x+incremento){
    console.log(Math.log(x))
}