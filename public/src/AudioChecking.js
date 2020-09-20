import audioAvailable from './AudioAvailable.js'
import answer from './Answer.js'
import muteControl from './Mute.js'

navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

navigator.getMedia({ video: false ,audio: true }, function () {
    console.log(`// Audio is available`);
    navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true
    }).then(stream => {
        answer(stream)
        audioAvailable(stream)
        muteControl(stream)
    }).catch(e => console.error(e))
}, function () {
    console.error(`// Audio is not available`);
});


