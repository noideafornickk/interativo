function carregar (){
var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('foto')
var data = 19 //new Date()
var hora =  data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 6){
    foto.src= 'madruga.webp'
    msg.innerHTML = `Boa Madrugada!`}
else if (hora >= 6 && hora < 12){
    foto.src='manha.jpg'
    msg.innerText ='Bom dia!'
} else if (hora >= 12 && hora <18) {
    foto.src = 'tarde.jpg'
    msg.innerHTML='Boa Tarde!'
}   
 else {
    foto.src='noite.png'
    msg.innerHTML = 'Buenas Noches! '
}
}