function carregar (){
var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('foto')
var data =  new Date()
var hora =  data.getHours()
if (hora >= 0 && hora < 6){
    img.src= 'madruga.webp'
    msg.innerHTML = `Agora são ${hora} horas. <br> Boa Madrugada! `
}else if (hora >= 6 && hora < 12){
    img.src='manha.jpg'   
    msg.innerHTML = `Agora são ${hora} horas. <br> Buenos Dias!`
} else if (hora >= 12 && hora <18) {
    img.src = 'tarde.jpg'
    msg.innerHTML = `Agora são ${hora} horas. <br> Boa Tarde!`
}   
 else {
    img.src='noite.png'
   msg.innerHTML = `Agora são ${hora} horas. <br> Buenas Noches!`
}
}