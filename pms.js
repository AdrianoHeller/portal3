function saudar(tempo){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(tempo),tempo)
    })
}

// console.log(saudar(2000))
// saudar(2000)
//     .then(() => console.log('Olá'))


async function saudacao(){
    const tempo = await saudar(4000)
    console.log('Olá',tempo)
}    

console.log(saudacao())