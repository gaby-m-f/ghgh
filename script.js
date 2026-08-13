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
        enunciado: "Qual é a maior lua do Sistema Solar, superando até mesmo o planeta Mercúrio em tamanho?",
        alternativas: [
            {
                texto: "Agricultura",
                afirmacao: "Falso"
            },
            {
                texto: "Pecuária",
                afirmacao: "Falso"
            },
            {
                texto: "Extrativismo",
                afirmacao: "Falso"
            },
            {
                texto: "Ganimedes",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "As áreas rurais são mais propensas a ter uma qualidade de ar melhor?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Não",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual é o nome dado ao movimento migratório em que a pessoa se desloca da área urbana para a rural?",
        alternativas: [
            {
                texto: "Sedentarismo",
                afirmacao: "Falso"
            },
            {
                texto: "Êxodo rural",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Migração",
                afirmacao: "Falso"
            },
            {
                texto: "Êxodo urbano",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "A população urbana é maior que a população rural?",
        alternativas: [
            {
                texto: "Verdadeiro",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Falso",
                afirmacao: "Falso"
            }    
        ]
    },
    {
        enunciado: "Qual o percentual dos municípios que são considerados rurais, segundo o IBGE?",
        alternativas: [
            {
                texto: "80,5%",
                afirmacao: "Falso"
            },
            {
                texto: "60,4%",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "51,3%",
                afirmacao: "Falso"
            },
            {
                texto: "26,1%",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual dos seguintes fatores é um dos principais motivos para a migração de pessoas do campo para a cidade?",
        alternativas: [
            {
                texto: "Desejo de viver em áreas com menor densidade populacional",
                afirmacao: "Falso"
            },
            {
                texto: "Necessidade de manter tradições agrícolas",
                afirmacao: "Falso"
            },
            {
                texto: "Preferência por um estilo de vida mais tranquilo e isolado",
                afirmacao: "Falso"
            },
            {
                texto: "Busca por melhores oportunidades de emprego e educação",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "Qual dos seguintes benefícios é frequentemente associado à vida no campo em comparação com a vida na cidade?",
        alternativas: [
            {
                texto: "Maior acesso a oportunidades de emprego",
                afirmacao: "Falso"
            },
            {
                texto: "Maior proximidade com centros comerciais e culturais",
                afirmacao: "Falso"
            },
            {
                texto: "Menor custo de vida",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Maior acesso a serviços de saúde especializados",
                afirmacao: "Falso"
            }
        ]
    }    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
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