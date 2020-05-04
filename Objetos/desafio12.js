convidado={
    informaçoesBasicas:{nome:'eneas',idade:16, sexo:'m', vip:false},
    informaçoesAvancadas:[
        'nao muito intimo, mas bem legal'
    ],
    horarioDeEntrada:(horario)=>{
        console.log(`O horario de ntrada do convidado foi ${horario}`)
    }
}
convidado.horarioDeEntrada('07:07')