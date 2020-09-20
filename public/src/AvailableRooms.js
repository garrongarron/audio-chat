let interval = null
const showAvailableRooms = (mySelf, socket, username) => {
    interval = setInterval(() => {
        socket.emit('get-rooms', '')
    }, 1000);
    let ul = document.createElement('ul')
    ul.classList.add('rooms')
    document.body.appendChild(ul)

    socket.on('available-rooms', data => {
        let current = []
        console.log(data);
        ul.querySelectorAll('li[class^=r]').forEach(li => {
            if (!data.includes(li.innerText)) {
                li.remove()
            }
        })
        data.forEach(element => {
            if (!document.querySelector('.r-' + element)) {
                let li = document.createElement('li')
                li.innerText = element
                li.classList.add('r-' + element)
                ul.appendChild(li)
                li.addEventListener('click', (e) => {
                    ul.classList.add('hide')
                    clearInterval(interval)
                    socket.emit('join-room', li.innerText, mySelf.id, username)
                })
            }
        });
    })
    let li = document.createElement('li')
    ul.appendChild(li)

    let input = document.createElement('input')
    input.placeholder = 'Create Room'
    li.appendChild(input)

    input.addEventListener('keydown', (e) => {
        if (e.keyCode == 13 && input.value.length > 3) {
            ul.classList.add('hide')
            clearInterval(interval)
            socket.emit('join-room', input.value, mySelf.id, username)
        }
    })
}


export default showAvailableRooms