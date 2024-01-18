const flz = document.querySelector(".feliz")
const nrv = document.querySelector(".nervoso")
const tst = document.querySelector(".triste")
let Par = document.getElementById("Assunto")
let cor = document.querySelector(".content")



flz.addEventListener("click", function(){
    cor.style.backgroundColor = "#ebcea0"
    Par.innerHTML = "Essa felicidade que contagia é uma bênção para todos nós, e eu não posso deixar de compartilhar contigo essa energia positiva que emana de ti. Cada riso teu é uma melodia que ecoa, enchendo nossos dias de calor e otimismo."
})

nrv.addEventListener("click", function (){
    cor.style.backgroundColor = "#cc2a41"
    Par.innerHTML = "A irritação, assim como qualquer outra emoção, é uma visita temporária. Às vezes, tudo o que precisamos é reconhecer esses sentimentos, permitir-nos senti-los e, em seguida, encontrar maneiras saudáveis de lidar com eles. Se precisares de um ouvido para desabafar, estou aqui para ouvir cada palavra, sem julgamentos."
})

tst.addEventListener("click", function (){
    cor.style.backgroundColor = "#424254"
    Par.innerHTML = "Cada lágrima que cai é um testemunho da tua humanidade, da tua força em enfrentar as emoções mais profundas. E, embora a tristeza possa parecer avassaladora, ela é apenas uma parte do teu incrível e complexo mosaico emocional. "
})



