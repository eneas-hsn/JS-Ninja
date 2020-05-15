let prom= new Promise((resolve,reject)=>{
    let a= 1+1
    if (a==2) {
        resolve('Deu certo')
    } else {
        reject('Não deu certo')
    }
}
)
prom
.then((message)=>{
    console.log(message)
})
.catch((erro)=>{
    console.log(erro)
})
//Sincrono
// function sumNumber() {
//     let result = 1 + 1

//     if (result == 2) {
//         sucessCallback()
//     } else {
//         errorCallback()
//     }
// }
// function sucessCallback() {
//     console.log('It worked')
// }
// function errosCallback() {
//     console.log('Something wrong')
// }

// sumNumber()