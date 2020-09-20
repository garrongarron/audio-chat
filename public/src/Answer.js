import myPeer from './Peer.js'
import mediaFactody from './MediaFactory.js'
import addVideoStream from './Player.js'

let answer = (stream) => {
    //envio string sin saber a quien
    //a los que estaban antes que yo
    myPeer.on('call', call => {
        console.log('envio mi string', call);
        call.answer(stream)
        call.on('stream', userVideoStream => {
            let audio = mediaFactody()
            let contenedor = document.querySelector('.u-'+call.peer)
            contenedor.appendChild(audio)
            addVideoStream(audio, userVideoStream)
        })
    })
}

export default answer