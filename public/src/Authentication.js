let input = document.createElement('input')
input.placeholder = 'User Name'
// li.appendChild(input)

input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13 && input.value.length > 3) {
        input.classList.add('hide')
        if(typeof afterAuth == 'function'){
            localStorage.setItem('name', input.value)
            console.log(input.value);
            afterAuth(input.value)
        }
    }
})

let afterAuth = null
let setCallback = (cb) =>{
    afterAuth = cb
}
export { setCallback }
export default input