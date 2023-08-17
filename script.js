const url = "https://api.adviceslip.com/advice"
const advices = document.querySelector("#advice")
const id = document.querySelector("h1")

async function newAdvice() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        id.textContent = `ADVICE #${data.slip.id}`
        advices.textContent = data.slip.advice;

    } catch (error) {
        console.error("Erro ao obter o conselho:", error);
    }
}
