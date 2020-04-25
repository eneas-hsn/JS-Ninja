function potencia(base,expoente) {
    var resultado=1;
    for(var cont=0;cont<expoente;cont++){
        resultado*=base
    }
    return resultado;
}
function potencia(base, expoente) {
    console.log('base'+ base)
    console.log('expoente'+ expoente)
    if (expoente==0) {
        return 1;
    }
    return base * potencia(base,expoente)
}
console.log(potencia(2, 3))