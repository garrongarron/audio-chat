let interval = null

const showAvailableRooms = (mySelf, socket, username) => {
    interval = setInterval(() => {
        socket.emit('get-rooms', '')
    }, 1000);
    let ul = document.createElement('ul')
    ul.classList.add('rooms')
    document.body.appendChild(ul)

    socket.on('available-rooms', data => {
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
                li.addEventListener('click', (e) => {
                    ul.classList.add('hide')
                    clearInterval(interval)
                    mySelf.room = li.innerText
                    socket.emit('join-room',
                        mySelf.room, mySelf.id, username)
                })
                ul.appendChild(li)
            }
        });
    })

    let li = document.createElement('li')
    let input = document.createElement('input')
    input.placeholder = 'Create Room'
    li.appendChild(input)
    ul.appendChild(li)

    input.addEventListener('keydown', (e) => {
        if (e.keyCode == 13 && input.value.length > 3) {
            ul.classList.add('hide')
            clearInterval(interval)
            mySelf.room = input.value
            socket.emit('join-room',
                input.value, mySelf.id, username)
        }
    })
}


export default showAvailableRooms