function Carregamento(){
    var  mensagem = window.document.getElementById('mensagem')
    var img = window.document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 13   
    mensagem.innerHTML=`Agora são ${hora} horas.`
    if(hora >=0 && hora < 12)
    {
        img.src='Manha.jpg'
        document.body.style.background = '#b0afab'
    }
    else if(hora >=12 && hora<18)
    {
        img.src='Tarde.jpg'
        document.body.style.background = '#edeef0'
    }
    else
    {
        img.src='Noite.jpg'
        document.body.style.background = '#092f55'

    }
}   