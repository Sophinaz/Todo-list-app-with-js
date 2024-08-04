let tasks = []

const button = document.querySelector('.btn')
const text = document.querySelector('.add')
const container = document.querySelector('.list')
const element = document.querySelector('h2')

button.addEventListener("click", () => {
    if (text.value) {
        tasks.push(text.value)
        
        const newtask = document.createElement('div')
        newtask.innerHTML = `
            <h2> ${text.value} </h2>
            <button> Delete </button>
        `
        container.appendChild(newtask)
        text.value = ""
    }
    else{
        alert("please insert a task")
    }
})

container.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})