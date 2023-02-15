function Carregamento(){
    var  mensagem = window.document.getElementById('mensagem')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = new data.getHours()
    mensagem.innerHTML=`Agora são ${hora} horas.`
}   