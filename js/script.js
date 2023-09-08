const tela = document.getElementById("display")
const botoes = document.querySelectorAll("button")

botoes.forEach((item) => {
    item.onclick = () => {
        if (item.id == "limpar") {
            tela.innerText = "";
        } else if (item.id == "apagar") {
            let string = tela.innerText.toString()
            tela.innerText = string.substr(0, tring,length -1)
        } else if (tela.innerText != "" && item.id == "igual") {
            tela.innerText = eval(tela.innerText);
        } else if (tela.innerText == "" && item.id == "igual") {
            tela.innerText = "Empty!"
            setTimeout(() => (tela.innerText = ""), 2000);
        } else {
            tela.innerText += item.id
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".calculator")
const togglerIcon = document.querySelector(".toggler-icon")
let isDark = true
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    isDark = !isDark 
}