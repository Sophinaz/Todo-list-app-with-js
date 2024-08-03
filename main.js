let tasks = []

const button = document.querySelector('.btn')
const text = document.querySelector('.add')
const container = document.querySelector('.list')
const element = document.querySelector('h2')

button.addEventListener("click", () => {
    if (text.value) {
        tasks.push(text.value)
        
        const newtask = document.createElement('h2')
        newtask.innerHTML = `${text.value}`
        container.appendChild(newtask)
        text.value = ""
    }
})

element.addEventListener("click", () => {
    // alert("s")
})