const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está preparado para o teste? ",

        alternativas: [
            {
                texto: "Sim",
                afirmacao: ""
            },
            {
                texto: "Lógico",
                afirmacao: ""
            }
        ]
    },{
        enunciado: "Qual é o planeta mais quente do Sistema Solar, conhecido por possuir uma atmosfera densa e um forte efeito estufa? ",

        alternativas: [
            {
                texto: "Vênus",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Júpiter",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual gás predomina na composição do Sol e da maioria das estrelas?",
        alternativas: [
            {
                texto: "Oxigênio",
                afirmacao: "Falso"
            },
            {
                texto: "Hidrogênio",
                afirmacao: "Verdadeiro"
            },
            
        ]
    },
    {
        enunciado: "Como é chamada a menor distância que a Terra atinge em relação ao Sol durante sua órbita?",
        alternativas: [
            {
                texto: "Periélio",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Afélio",
                afirmacao: "Falso"
            }     
        ]
    },
    {
        enunciado: "Qual planeta do Sistema Solar tem o eixo de rotação tão inclinado que ele praticamente rola de lado ao redor do Sol?",
        alternativas: [
            {
                texto: "Netuno",
                afirmacao: "Falso"
            },
            {
                texto: "Urânio",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "Qual planeta é conhecido como Planeta Vermelho?",
        alternativas: [
            {
                texto: "Marte",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Saturno",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual é o satélite natural da Terra?",
        alternativas: [
            {
                texto: "Sol",
                afirmacao: "Falso"
            },
            {
                texto: "Lua",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "Uma estrela com massa muito maior que a do Sol pode terminar sua vida como uma supernova. Qual pode ser um dos possíveis remanescentes desse evento?",
        alternativas: [
            {
                texto: "Um buraco negro",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Um asteroide",
                afirmacao: "Falso"
            }    
        ]
    },
    {
        enunciado: "Qual é a principal razão pela qual vemos diferentes fases da Lua?",
        alternativas: [
            {
                texto: "A sombra da Terra cobre a Lua todas as noites.",
                afirmacao: "Falso"
            },
            {
                texto: "Observamos diferentes porções da metade iluminada da Lua conforme ela orbita a Terra.",
                afirmacao: "Verdadeiro"
            },
        ]
    },
    {
        enunciado: "Qual é a principal fonte de energia do Sol?",
        alternativas: [
            {
                texto: "Fissão nuclear",
                afirmacao: "Falso"
            },
            {
                texto: "Fusão nuclear",
                afirmacao: "Verdadeiro"
            }
        ]
    }  
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= caixaResultado.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    if (Object.keys(contagemAfirmacoes).length > 0) {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://AlmeidaGabrielzinho.github.io/agrinho_2024">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        const numeroVerdadeiro = contagemAfirmacoes['Verdadeiro'] || 0;
        textoResultado.textContent = numeroVerdadeiro > 1 ? numeroVerdadeiro : 0;
        caixaAlternativas.textContent = "";
    } else {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://AlmeidaGabrielzinho.github.io/agrinho_2024">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        textoResultado.textContent = 0;
        caixaAlternativas.textContent = "";
    }
}