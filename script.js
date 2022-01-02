const texts = document.querySelector(".texts")

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.interimResults = true

let p = document.createElement("p")

recognition.addEventListener("result", (e) => {
    texts.appendChild(p)
    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("")

    p.innerText = text
    if (e.results[0].isFinal) {
        if (text.includes("Как дела")) {
            p = document.createElement("p")
            p.classList.add("replay")
            p.innerText = "Отлично, а у вас как дела?"
            speechSynthesis.speak(new SpeechSynthesisUtterance('Отлично, а у вас как дела?'))
            texts.appendChild(p)
        }
        if (text.includes("Привет") || text.includes("привет")) {
            p = document.createElement("p")
            p.classList.add("replay")
            p.innerText = "Здравствуйте!"
            speechSynthesis.speak(new SpeechSynthesisUtterance('Здравствуйте!'))
            texts.appendChild(p)
        }
        if (
            text.includes("как тебя зовут") ||
            text.includes("Как тебя зовут")
        ) {
            p = document.createElement("p")
            p.classList.add("replay")
            p.innerText = "Мое имя Шелли"
            speechSynthesis.speak(new SpeechSynthesisUtterance('Мое имя Шелли'))
            texts.appendChild(p)
        }
        if (
            text.includes("кто тебя сделал") ||
            text.includes("Кто тебя сделал")
        ) {
            p = document.createElement("p")
            p.classList.add("replay")
            p.innerText = "Мой создатель Темирлан"
            speechSynthesis.speak(new SpeechSynthesisUtterance('Мой создатель Темирлан'))
            texts.appendChild(p)
        }
        if (text.includes("Открой YouTube") || text.includes("открой YouTube")) {
            p = document.createElement("p")
            p.classList.add("replay")
            p.innerText = "Открываю YouTube"
            speechSynthesis.speak(new SpeechSynthesisUtterance('Открываю YouTube'))
            texts.appendChild(p)
            console.log("opening youtube")
            window.open("https://www.youtube.com")
        }
        p = document.createElement("p")
    }
})

recognition.addEventListener("end", () => {
    recognition.start()
})

recognition.start()
