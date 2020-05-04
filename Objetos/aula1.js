var funcionario={ 
    nome: 'Eneas',
    idade:16,
    cadastro:777,
    eventos:[
        {evento:'faltou', data:'2020/07/07'},
        {evento:'desrespeitou', data :'2020/07/17'}
    ],
    detalhes:{
        hobbies:[
            'gamer', 'listen music'
        ]
    },
registrarEntrada:function (data) {
    console.log(`Registro data de entrada ${data}`)
},
registrarSaida:function (data) {
    console.log(`Registra data de saida ${data}`)
}
}
funcionario.registrarEntrada('2003/09/30')
