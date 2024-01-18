
const But = document.getElementById("botão")

But.addEventListener('click', function () {
    const frases = [
        "Albertiana, lembre-se: cada desafio é uma oportunidade de crescimento.",
        "Seja sempre a melhor versão de você mesma, Albertiana. O mundo precisa do seu brilho único.",
        "A jornada para a felicidade é pavimentada com pequenos passos de amor próprio, Albertiana.",
        "Cada dia é uma página em branco. Escreva uma história inspiradora, Albertiana.",
        "Suas escolhas hoje moldam a Albertiana que será amanhã. Faça escolhas que a impulsionem para o sucesso.",
        "A felicidade é um estado de espírito. Escolha ser feliz todos os dias, Albertiana.",
        "Albertiana, permita-se crescer, aprender e florescer como a bela pessoa que você é.",
        "O progresso é a chave para a felicidade duradoura. Continue avançando, Albertiana.",
        "Cada obstáculo é uma oportunidade de mostrar sua força interior, Albertiana.",
        "Acredite no seu potencial, Albertiana. Você é capaz de alcançar grandes alturas.",
    ];
    const frasesAleatorias = frases[Math.floor(Math.random() * frases.length)];
    const Par = document.getElementById("Assunto");

    Par.innerHTML = frasesAleatorias;
});





