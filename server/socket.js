const { userList, getOpenRooms, setRooms, getList, removeUser } = require('./database');

const setSocketIo = (io) => {
    io.on('connection', socket => {
        socket.on('get-rooms', (string) => {
            socket.emit('available-rooms', getOpenRooms())//a si mismo
        })
        socket.on('join-room', (roomId, userId, username) => {
            // if(roomId == 'none'){
            //     socket.emit('welcome', [userId, getOpenRooms()])//a si mismo
            //     return
            // }

            socket.join(roomId)
            if(setRooms(roomId, userId)===false){
                 return //room closed
            }

            userList[userId] = username
            let list = getList(roomId)

            socket.emit('welcome', [userId, list])//a si mismo
            socket.to(roomId).broadcast.emit('user-connected', [userId, list])//a los demas

            socket.on('disconnect', () => {
                removeUser(roomId, userId)
                socket.to(roomId).broadcast.emit('user-disconnected', [userId, getList(roomId)])//a los demas
            })
        })
    })
}


module.exports = { setSocketIo };

