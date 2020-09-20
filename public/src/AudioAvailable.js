import socket from './Socket.js'
import myPeer from './Peer.js'
import addVideoStream from './Player.js'
import mediaFactody from './MediaFactory.js'

let audioAvailable = (stream) => {
    //////////////////////////////////////////////////////////////////////////
    // let audio = document.createElement('audio')
    // audio.setAttribute('controls', 'controls')
    // document.body.appendChild(audio)
    // addVideoStream(audio, stream)//temporalmente muestro mi audio en pantalla
    //////////////////////////////////////////////////////////////////////////
    sendAudio(stream)
}
let sendAudio = (stream) => {
    socket.on('user-connected', data => {
        let user = data[0]
        // console.log('user-connected', data);
        const call = myPeer.call(user, stream)//yo envio audio del nuevo usuario (despues de mi entrada)
        let audio = mediaFactody()
        let contenedor = document.querySelector('.u-'+user)
            contenedor.appendChild(audio)
        call.on('stream', function (stream) {//yo recibo audio del nuevo usuario
            addVideoStream(audio, stream)
        })
        call.on('close', () => {
            audio.remove()
        })
    })
}



export default audioAvailable