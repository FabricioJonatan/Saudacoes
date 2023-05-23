function carregar(){
    let data = new Date()
    let hora = data.getHours()
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#fotoh')
    let sau = document.querySelector('p#saudacao')
    let ico = document.head.querySelector('link#ico')
    let body = document.body

    msg.innerHTML = `Atualmente são <strong>${hora}</strong> horas`


    if (hora <= 4 || hora >= 17){
        img.src = './images/noite.jpg'
        ico.href = './images/noite.ico'
        img.alt = 'Boa Noite'
        sau.innerHTML = 'Tenha uma ótima Noite'
        body.style.backgroundColor = '#10063e'

    } else if (hora >= 5 && hora <= 12){
        img.src = './images/dia.jpg'
        ico.href = './images/dia.ico'
        img.alt = 'Bom Dia'
        sau.innerHTML = 'Tenha um ótimo Dia'

    } else{
        img.src = './images/tarde.jpg'
        ico.href = './images/tarde.ico'
        img.alt = 'Boa Tarde'
        sau.innerHTML = 'Tenha uma ótima Tarde'
        body.style.backgroundColor = '#b77503'

    }
}
