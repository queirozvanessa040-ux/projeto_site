const dadosEmergencia = {
    socorros: {
        banner: "Primeiros Socorros — Atendimento Imediato",
        fazer: [
            "Verificar se o local está seguro antes de se aproximar",
            "Chamar o SAMU (192) ou os Bombeiros (193), conforme a situação",
            "Verificar se a vítima responde e respira normalmente",
            "Manter a vítima protegida e tranquila",
            "Aguardar o socorro especializado"
        ],
        naoFazer: [
            "Não mover a vítima sem necessidade",
            "Não oferecer água ou alimentos",
            "Não dar medicamentos por conta própria",
            "Não retirar o capacete de um motociclista acidentado",
            "Não aplicar produtos caseiros em queimaduras"
        ]
    },

    incendio: {
        banner: "Incêndio — Evacuação e Segurança",
        fazer: [
            "Acionar o alarme, se for seguro",
            "Ligar para os Bombeiros (193)",
            "Utilizar as saídas de emergência sinalizadas",
            "Afastar-se da fumaça e seguir as rotas de evacuação",
            "Dirigir-se ao ponto de encontro seguro"
        ],
        naoFazer: [
            "Não utilizar elevadores durante o incêndio",
            "Não voltar para buscar objetos pessoais",
            "Não correr nem empurrar outras pessoas",
            "Não abrir uma porta quente",
            "Não combater o fogo sem treinamento"
        ]
    },

    quimico: {
        banner: "Acidente Químico — Vazamentos e Exposição",
        fazer: [
            "Afastar-se da área contaminada e alertar outras pessoas",
            "Acionar os serviços de emergência adequados",
            "Informar qual é o produto, se puder identificá-lo com segurança",
            "Seguir as orientações dos profissionais especializados",
            "Em caso de exposição, buscar orientação específica para o produto"
        ],
        naoFazer: [
            "Não tocar em substâncias desconhecidas",
            "Não inalar vapores diretamente",
            "Não misturar produtos químicos",
            "Não tentar conter o vazamento sem treinamento e proteção adequada",
            "Não descartar resíduos na rede pública"
        ]
    },

    queda: {
        banner: "Queda de Altura — Atendimento à Vítima",
        fazer: [
            "Verificar se o local está seguro",
            "Chamar o SAMU (192) ou os Bombeiros (193)",
            "Orientar a vítima a permanecer imóvel",
            "Mantê-la protegida sem movimentá-la",
            "Aguardar a chegada do socorro especializado"
        ],
        naoFazer: [
            "Não tentar levantar a vítima",
            "Não movimentar o pescoço ou a coluna",
            "Não massagear áreas com suspeita de fratura",
            "Não permitir que a vítima tente caminhar",
            "Não puxar nem movimentar membros machucados"
        ]
    }
};

function trocarCategoria(chave) {
    const info = dadosEmergencia[chave];

    if (!info) {
        return;
    }

    document.getElementById("banner-titulo").textContent = info.banner;

    const listaFazer = document.getElementById("lista-fazer");
    listaFazer.innerHTML = info.fazer
        .map(item => `<li>${item}</li>`)
        .join("");

    const listaNaoFazer = document.getElementById("lista-nao-fazer");
    listaNaoFazer.innerHTML = info.naoFazer
        .map(item => `<li>${item}</li>`)
        .join("");

    const botoes = document.querySelectorAll(".botao-setor");

    botoes.forEach(btn => {
        btn.classList.remove("ativo");
    });

    const btnAtivo = document.getElementById("btn-" + chave);

    if (btnAtivo) {
        btnAtivo.classList.add("ativo");
    }
}

window.onload = function() {
    trocarCategoria("socorros");
};
