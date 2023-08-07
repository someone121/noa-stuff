const container = document.getElementById('all-chars')
const chars = Array.from(container.getElementsByTagName('button'))

function firstFunction(event){
    const text = event.target.parentElement.getElementsByTagName('p')[0]

    text.hidden = !text.hidden
}

chars.forEach((button) => {
    button.addEventListener('click', firstFunction)
})


