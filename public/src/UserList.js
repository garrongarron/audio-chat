import { mute } from "./Mute.js"
import mySelf from "./MySelf.js"
import socket from './Socket.js'

let ul = document.createElement('ul')
ul.classList.add('player')
document.body.appendChild(ul)

const populate = (arr) => {
    console.log(arr);
    ul.innerText = ''
    for (const key in arr[1]) {
        if (arr[1].hasOwnProperty(key)) {
            let li = document.createElement('li')
            li.innerText = arr[1][key]+'-'+key
            li.classList.add('u-' + key)
            ul.appendChild(li)
        }
    }

    let close = document.createElement('li')
    close.innerText = 'Close'
    close.classList.add('close')
    ul.appendChild(close)

    close.addEventListener('click', ()=>{
        socket.emit('close-rooms', mySelf.room)
    })

    let ul2 = document.querySelector('.u-' + mySelf.id)
    if (ul2) ul2.appendChild(mute)
}
export default populate