function carregar (){
var msg = window.document.getElementById('msg')
var msg2 = window.document.getElementById('msg2')
var t2 = window.document.getElementById('t2')
var foto = window.document.getElementById('foto & foto2')
var data =  new Date()
var hora = data.getHours()
if (hora >= 0 && hora < 6){
    img.src= 'madruga.webp'
    img2.src= 'sono.png'
    msg.innerHTML = `Agora são ${hora} horas. <br> Boa Madrugada! `
    msg2.innerHTML = `Heyy, você não está com sono não? <br>Eu já estou até pescando no meu livro</br> <br>*WUAaaa...*</br>
    <br>*hmm, um whiskas agora não seria nada mal...ahh, deixa pra mais tarde*</br>`
    t2.innerHTML=`Vamos dar uma descansada? <br>Pois eu irei, haha</br><br>Tchauuu, ops...</br>
    <br>Miauuu :3</br>`

   
} else if (hora >= 6 && hora < 12){
    img.src='manha.jpg'   
    img2.src='zoio.png'
    msg.innerHTML = `Agora são ${hora} horas. <br> Buenos Dias!`
    msg2.innerHTML=`Mano, são ${hora} horas da manhã doido, o que estás a fazer aqui?<br>Bem, independente do que seja, apenas seja breve</br>
    <br>Estarei de olho em ti enquanto fuça aqui</br>`
    t2.innerHTML=`*Que menininho mais mal-humorado, nem um bom dia digno me deu <br>Denunciado, ff15 no Diff</br>`
} else if (hora >= 12 && hora <18) {
    img2.src='estudo.png'
    img.src = 'tarde.jpg'
    msg.innerHTML = `Agora são ${hora} horas. <br> Boa Tarde!`
    msg2.innerHTML=`Salve meu rei, como estás? ... que mais que é pra por aqui? to sem ideia, se esse código der errado eu taco fogo nesse PC réi. 
    <br>*Maravilha, deu tudo certo haha, tudo certo pra dar errado</br>`
    t2.innerHTML=`Ok Google, como centralizar uma <br>D</br>I</br>V`

}   
 else {
    img.src='noite.png'
    img2.src='hello.png' 
   msg.innerHTML = `Agora são ${hora} horas. <br> Buenas Noches!`
   msg2.innerHTML=`eu finjo que não percebo, mas tudo está sendo observado. o esperto se faz de bobo só pra ver até onde o burro se faz de inteligente. nesse jogo sútil cada movimento é estratégico e cada palavra tem um significado oculto. por trás do meu sorriso sereno, estou atento a cada detalhe.`
   t2.innerHTML=`And you don't seem to understand
   <br>
   A shame, you seemed an honest man`
}
}
