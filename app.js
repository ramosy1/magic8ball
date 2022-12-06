const magicBall = document.getElementById("mb_container");
const response = document.getElementById("response");

const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predit now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

magicBall.addEventListener("click", function() {

    const index = Math.floor(Math.random()*20);
    const message = answers[index];
    magicBall.className = "mb_outside animate";

    setTimeout(() => {
        response.textContent = message;
        response.style.fontSize = "1rem";
        magicBall.className = "mb_outside";
    }, 3000);
 
})