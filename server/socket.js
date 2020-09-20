const { userList, getOpenRooms, setRooms, getList, removeUser, closeRoom} = require('./database');

const setSocketIo = (io) => {
    io.on('connection', socket => {
        socket.on('get-rooms', (string) => {
            socket.emit('available-rooms', getOpenRooms())//a si mismo
        })
        socket.on('close-rooms', (roomId) => {
            console.log(getOpenRooms());
            closeRoom(roomId);
            
        })
        socket.on('join-room', (roomId, userId, username) => {

            socket.join(roomId)
            if(setRooms(roomId, userId)===false){
                 return //room closed
            }

            userList[userId] = username
            let list = getList(roomId)

            socket.emit('welcome', [userId, list])//a si mismo
            socket.to(roomId).broadcast.emit('user-connected', [userId, list])//a los demas

            socket.on('disconnect', () => {
                if(removeUser(roomId, userId)){
                    socket.to(roomId).broadcast.emit('user-disconnected', [userId, getList(roomId)])//a los demas
                }
            })
        })
    })
}


module.exports = { setSocketIo };

