console.log('o console funcionou!')
var vel = 99
var agora = new Date()
var hora = agora.getTime()

console.log(`a velocidade é ${vel}`)
if (vel > 60) {
    console.log(`Você ultrapassou o limite de velocidade ${vel}. MULTADO !`)
}
console.log(`Dirija com seguranca ${hora}`)

