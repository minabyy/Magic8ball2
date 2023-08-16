const answers = [
	"It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "No"
];

const questionInput = document.getElementById("question-input");
const askButton = document.getElementById("ask-button");
const answerText = document.getElementById("answer-text");
const answerOverlay = document.getElementById("answer-overlay");
const numberEight = document.createElement("div"); 

numberEight.textContent = "8"; 
numberEight.classList.add("number-eight"); 
answerText.appendChild(numberEight); 

askButton.addEventListener("click", () => {
    if (questionInput.value.trim() !== "") {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerText.textContent = answers[randomIndex];
        answerOverlay.style.display = "block";
        questionInput.value = "";
    } else {
        answerText.textContent = ""; 
        answerOverlay.style.display = "none"; 
    }
});
