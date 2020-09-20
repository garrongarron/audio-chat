const showAvailableRooms = (mySelf, socket, username) => {
    socket.emit('get-rooms', '')
    let ul = document.createElement('ul')
    ul.classList.add('rooms')
    document.body.appendChild(ul)

    socket.on('available-rooms', data => {
        data.forEach(element => {
            let li = document.createElement('li')
            li.innerText = element
            ul.appendChild(li)
            li.addEventListener('click', (e) => {
                socket.emit('join-room', li.innerText, mySelf.id, username)
                ul.classList.add('hide')
            })
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
            socket.emit('join-room', input.value, mySelf.id, username)
        }
    })
}


export default showAvailableRooms