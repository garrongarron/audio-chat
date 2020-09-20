import socket from './Socket.js'
import mySelf from './MySelf.js'

let mute = document.createElement('div')
let btn = document.createElement('button')
btn.innerText = 'Mute'
btn.classList.add('red')
btn.addEventListener('click', () => {
    if (btn.classList.contains('red')) {
        btn.classList.add('gray')
        btn.classList.remove('red')
    } else {
        btn.classList.add('red')
        btn.classList.remove('gray')
    }
    volumen.stream.getTracks().forEach(track => {
        track.enabled = !track.enabled
        // socket.emit('mute', mySelf.id, track.enabled)
    });
})
mute.appendChild(btn)

let volumen = { stream: null }
let muteControl = (stream) => {
    volumen.stream = stream
}
export { mute }
export default muteControl