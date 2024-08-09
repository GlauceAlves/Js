function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date();
    var hora = data.getHours();
    // var hora = 19;
    msg.innerHTML = `Agora são ${hora}`
    if (hora >= 0 && hora < 12) {
        img.src = './imagem/fotomanha.jpg'
        img.alt = 'foto de manhã '
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './imagem/fototarde.jpg'
        img.alt = 'foto de tarde '
        document.body.style.background = '#b9846f'
    } else {
        img.src = './imagem/fotonoite.png'
        img.alt = 'foto de noite '
        document.body.style.background = '#515154'
    }

}