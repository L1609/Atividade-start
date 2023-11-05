const questions = [
    {
        question: "Qual é a função do elemento <div> em HTML?",
        answer: "O elemento <div> é usado como um contêiner genérico para conteúdo seccional, que geralmente é estilizado com CSS e manipulado com JavaScript."
    },
    {
        question: "Como se seleciona um elemento por sua classe em CSS?",
        answer: "Você pode selecionar um elemento por sua classe usando o seletor '.' seguido pelo nome da classe. Por exemplo, .minha-classe { propriedade: valor; }."
    },



    {
        question: "Como você declara uma variável em JavaScript?",
        answer: "Você pode declarar uma variável em JavaScript usando as palavras-chave 'var', 'let' ou 'const', seguidas pelo nome da variável. Por exemplo, 'var myVar = valor;' ou 'let myVar = valor;' ou 'const myVar = valor;'."
    },
    // Adicione mais perguntas conforme necessário
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    document.getElementById('question').textContent = questions[currentQuestion].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        score++;
        document.getElementById('result').textContent = "Correto! Pontuação: " + score;
    } else {
        document.getElementById('result').textContent = "Incorreto! Pontuação: " + score;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById('question').textContent = "Fim do Jogo. Sua pontuação final é: " + score;
        document.getElementById('answer').style.display = 'none';
        document.querySelector('button').style.display = 'none';
    }
}

displayQuestion();
