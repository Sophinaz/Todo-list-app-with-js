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
            <div class="inner">
            <h3> Edit </h3>
            <button> Delete </button>
            </div>
        `
        newtask.classList.add("outer")
        container.appendChild(newtask)
        text.value = ""
    }
    else{
        alert("please insert a task")
    }
})

container.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.parentElement.remove();
    }
    else if (e.target.tagName === 'H3'){
        const edittask = prompt('Enter new task:')
        const tex = e.target.parentElement.parentElement
        tex.children[0].textContent = edittask
    }
})