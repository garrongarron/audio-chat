let input = document.createElement('input')
input.placeholder = 'User Name'
// li.appendChild(input)

input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13 && input.value.length > 3) {
        input.classList.add('hide')
    }
})

export default input