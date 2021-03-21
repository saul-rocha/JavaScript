// variaveis var, let, const

// global var funcionam/podem ser mutadas em diferentes escopos
console.log("> existe x antes do bloco?", x)
{
    var x = 0
}
console.log("> existe x antes do bloco?", x)

//local let é imutavel
// funciona apenas no escopo onde foi criada
let y = 1

{
    let y = 0
    console.log("> existe y?", y)
}

console.log("> existe y?", y)

//local const
// funciona apenas no escopo onde foi criada
const z = 2

{
    const z = 1
    console.log("> existe z?", z)
}
console.log("> existe z?", z)