import populate from './UserList.js'


let setSocket = (socket) => {
    socket.on('user-connected', data => {
        populate(data)
    })
    socket.on('welcome', data => {
        console.log(data);
        populate(data)
    })
    socket.on('user-disconnected', data => {
        populate(data)
    })
}
export default setSocket