// TELAS

const inicio = document.getElementById("inicio");
const historia = document.getElementById("historia");
const pistas = document.getElementById("pistas");
const interrogatorio = document.getElementById("interrogatorio");
const analise = document.getElementById("analise");
const acusacao = document.getElementById("acusacao");
const resultado = document.getElementById("resultado");


// BOTÕES DE NAVEGAÇÃO

const btnIniciar = document.getElementById("btnIniciar");
const btnIrPistas = document.getElementById("btnIrPistas");
const btnIrInterrogatorio =
    document.getElementById("btnIrInterrogatorio");

const btnIrAnalise =
    document.getElementById("btnIrAnalise");

const btnIrAcusacao =
    document.getElementById("btnIrAcusacao");


// COMEÇAR

btnIniciar.addEventListener("click", function() {

    inicio.classList.remove("ativa");
    historia.classList.add("ativa");

});


// HISTÓRIA → PISTAS

btnIrPistas.addEventListener("click", function() {

    historia.classList.remove("ativa");
    pistas.classList.add("ativa");

});


// PISTAS → INTERROGATÓRIO

btnIrInterrogatorio.addEventListener("click", function() {

    pistas.classList.remove("ativa");
    interrogatorio.classList.add("ativa");

});


// DADOS DOS SUSPEITOS

const suspeitos = {

    Helena: {

        relacao: "Irmã de Augusto",
        inicial: "H",

        fala:
        "Eu estava na sala quando as luzes apagaram. " +
        "Eu realmente discuti com Augusto naquela noite, " +
        "mas depois voltei para a sala.",

        perguntas: [

            {
                pergunta: "Você brigou com Augusto?",

                resposta:
                "Sim. Discutimos sobre um assunto da família. " +
                "Eu fiquei irritada, mas não voltei ao escritório."
            },

            {
                pergunta: "Onde você estava às 22h03?",

                resposta:
                "Na sala. Eu estava sozinha naquele momento."
            },

            {
                pergunta: "Você entrou no corredor?",

                resposta:
                "Não. Pelo menos não depois que fui para a sala."
            }

        ]

    },


    Rafael: {

        relacao: "Sócio de Augusto",
        inicial: "R",

        fala:
        "Eu fui para o jardim fazer uma ligação. " +
        "Não queria conversar sobre negócios na frente dos outros.",

        perguntas: [

            {
                pergunta: "Que ligação você fez?",

                resposta:
                "Era um assunto da empresa. Augusto e eu estávamos " +
                "com problemas para resolver."
            },

            {
                pergunta: "Que horas você foi para o jardim?",

                resposta:
                "Por volta das 22h. A ligação aconteceu alguns minutos depois."
            },

            {
                pergunta: "Você passou pelo corredor?",

                resposta:
                "Passei pela casa antes de ir ao jardim, mas não entrei no escritório."
            }

        ]

    },


    Clara: {

        relacao: "Secretária de Augusto",
        inicial: "C",

        fala:
        "A anotação no bloco era sobre mim. Augusto tinha pedido " +
        "para conversarmos sobre alguns documentos.",

        perguntas: [

            {
                pergunta: "Sobre o que vocês discutiram?",

                resposta:
                "Ele estava preocupado com alguns documentos " +
                "e queria saber se eu tinha visto determinadas informações."
            },

            {
                pergunta: "Quando você saiu do escritório?",

                resposta:
                "Pouco depois das dez. Augusto ainda estava vivo " +
                "quando eu saí."
            },

            {
                pergunta: "Você voltou ao escritório?",

                resposta:
                "Não. Depois da conversa, fui para a sala."
            }

        ]

    },


    Daniel: {

        relacao: "Amigo de Augusto",
        inicial: "D",

        fala:
        "Eu fiquei na sala durante praticamente toda a noite. " +
        "Não entrei no escritório.",

        perguntas: [

            {
                pergunta: "Você tinha uma chave do escritório?",

                resposta:
                "Não. Augusto nunca me deu uma chave."
            },

            {
                pergunta: "Onde você estava às 22h03?",

                resposta:
                "Na sala. Eu não saí de lá naquele momento."
            },

            {
                pergunta: "Você tinha algum assunto para resolver com Augusto?",

                resposta:
                "Não. Nós éramos amigos. Não havia nada para resolver."
            }

        ]

    },


    Beatriz: {

        relacao: "Governanta da casa",
        inicial: "B",

        fala:
        "Eu levei café para Augusto antes da conversa com Clara. " +
        "Depois voltei para a cozinha.",

        perguntas: [

            {
                pergunta: "Você entrou no escritório naquela noite?",

                resposta:
                "Sim, mas apenas para levar o café."
            },

            {
                pergunta: "Você viu Clara entrar?",

                resposta:
                "Sim. Ela entrou depois que eu saí."
            },

            {
                pergunta: "Você voltou ao escritório depois?",

                resposta:
                "Não. Fiquei na cozinha."
            }

        ]

    }

};


// CONTROLE DO INTERROGATÓRIO

let suspeitosInterrogados = [];

let suspeitoAtual = null;


// ELEMENTOS

const caixaDepoimento =
    document.getElementById("caixaDepoimento");

const avatar =
    document.getElementById("avatar");

const nomeSuspeito =
    document.getElementById("nomeSuspeito");

const relacaoSuspeito =
    document.getElementById("relacaoSuspeito");

const falaPrincipal =
    document.getElementById("falaPrincipal");

const perguntas =
    document.getElementById("perguntas");

const resposta =
    document.getElementById("resposta");

const avisoInterrogatorio =
    document.getElementById("avisoInterrogatorio");


// FUNÇÃO PARA ABRIR SUSPEITO

function abrirSuspeito(nome) {

    suspeitoAtual = nome;

    const pessoa = suspeitos[nome];

    caixaDepoimento.classList.remove("escondido");

    avatar.textContent = pessoa.inicial;

    nomeSuspeito.textContent = nome;

    relacaoSuspeito.textContent = pessoa.relacao;

    falaPrincipal.textContent = `"${pessoa.fala}"`;

    resposta.classList.add("escondido");

    resposta.textContent = "";

    perguntas.innerHTML = "";


    pessoa.perguntas.forEach(function(item) {

        const botao = document.createElement("button");

        botao.className = "pergunta";

        botao.textContent = item.pergunta;


        botao.addEventListener("click", function() {

            resposta.classList.remove("escondido");

            resposta.textContent = item.resposta;

        });


        perguntas.appendChild(botao);

    });


    if (!suspeitosInterrogados.includes(nome)) {

        suspeitosInterrogados.push(nome);

    }


    verificarInterrogatorio();

}


// BOTÕES DOS SUSPEITOS

document.getElementById("suspeitoHelena")
    .addEventListener("click", function() {

        abrirSuspeito("Helena");

    });


document.getElementById("suspeitoRafael")
    .addEventListener("click", function() {

        abrirSuspeito("Rafael");

    });


document.getElementById("suspeitoClara")
    .addEventListener("click", function() {

        abrirSuspeito("Clara");

    });


document.getElementById("suspeitoDaniel")
    .addEventListener("click", function() {

        abrirSuspeito("Daniel");

    });


document.getElementById("suspeitoBeatriz")
    .addEventListener("click", function() {

        abrirSuspeito("Beatriz");

    });


// VERIFICAR SE TODOS FORAM OUVIDOS

function verificarInterrogatorio() {

    if (suspeitosInterrogados.length === 5) {

        btnIrAnalise.disabled = false;

        avisoInterrogatorio.classList.add("escondido");

    }

}


// INTERROGATÓRIO → ANÁLISE

btnIrAnalise.addEventListener("click", function() {

    if (suspeitosInterrogados.length < 5) {

        avisoInterrogatorio.classList.remove("escondido");

        return;

    }

    interrogatorio.classList.remove("ativa");

    analise.classList.add("ativa");

});


// ANÁLISE → ACUSAÇÃO

btnIrAcusacao.addEventListener("click", function() {

    analise.classList.remove("ativa");

    acusacao.classList.add("ativa");

});


// ELEMENTOS DO FINAL

const finalCard =
    document.getElementById("finalCard");

const finalIcone =
    document.getElementById("finalIcone");

const finalTitulo =
    document.getElementById("finalTitulo");

const finalTexto =
    document.getElementById("finalTexto");

const explicacao =
    document.getElementById("explicacao");


// ACUSAÇÃO

function fazerAcusacao(nome) {

    acusacao.classList.remove("ativa");

    resultado.classList.add("ativa");


    if (nome === "Daniel") {

        finalCard.classList.remove("derrota");

        finalCard.classList.add("vitoria");

        finalIcone.textContent = "CASO RESOLVIDO";

        finalTitulo.textContent =
            "Você descobriu o culpado.";

        finalTexto.textContent =
            "Daniel era o responsável pela morte de Augusto.";

        explicacao.innerHTML =
            "<strong>Como as pistas se conectavam:</strong><br><br>" +

            "Daniel afirmou que não tinha uma chave do escritório " +
            "e que permaneceu na sala às 22h03. " +

            "Porém, a investigação revelou que ele tinha acesso " +
            "à chave e sua versão não correspondia ao restante " +
            "das evidências.";

    } else {

        finalCard.classList.remove("vitoria");

        finalCard.classList.add("derrota");

        finalIcone.textContent = "CASO ENCERRADO";

        finalTitulo.textContent =
            "A acusação estava errada.";

        finalTexto.textContent =
            "O verdadeiro culpado era Daniel.";

        explicacao.innerHTML =
            "<strong>O que você deixou passar:</strong><br><br>" +

            "Daniel mentiu sobre não possuir uma chave do escritório " +
            "e sua versão sobre estar na sala não combina com " +
            "as evidências encontradas durante a investigação.";

    }

}


// BOTÕES DE ACUSAÇÃO

document.getElementById("acusHelena")
    .addEventListener("click", function() {

        fazerAcusacao("Helena");

    });


document.getElementById("acusRafael")
    .addEventListener("click", function() {

        fazerAcusacao("Rafael");

    });


document.getElementById("acusClara")
    .addEventListener("click", function() {

        fazerAcusacao("Clara");

    });


document.getElementById("acusDaniel")
    .addEventListener("click", function() {

        fazerAcusacao("Daniel");

    });


document.getElementById("acusBeatriz")
    .addEventListener("click", function() {

        fazerAcusacao("Beatriz");

    });


// RECOMEÇAR

document.getElementById("btnRecomecar")
    .addEventListener("click", function() {

        resultado.classList.remove("ativa");

        finalCard.classList.remove("vitoria");
        finalCard.classList.remove("derrota");

        inicio.classList.add("ativa");

        suspeitosInterrogados = [];

        caixaDepoimento.classList.add("escondido");

        btnIrAnalise.disabled = true;

    });