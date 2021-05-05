const db = require('./database');

const setSocketIo = (io) => {
    io.on('connection', socket => {

        socket.on('get-rooms', (string) => {
            socket.emit('available-rooms',
                db.getOpenRooms())//a si mismo
        })

        socket.on('close-rooms', (roomId) => {
            console.log(db.getOpenRooms());
            db.closeRoom(roomId);

        })

        socket.on('join-room',
            (roomId, userId, username) => {

                socket.join(roomId)// set room
                //if room is closed
                if (db.setRooms(roomId, userId) === false) {
                    return //room closed
                }

                db.userList[userId] = username
                let list = db.getList(roomId)
                //a si mismo
                socket.emit('welcome', [userId, list])
                socket.to(roomId).broadcast.emit(
                    'user-connected',
                    [userId, list])//a los demas

                socket.on('disconnect', () => {
                    socket.leave(roomId);
                    if (db.removeUser(roomId, userId)) {
                        //a los demas
                        socket.to(roomId).broadcast.emit(
                            'user-disconnected',
                            [userId, db.getList(roomId)])
                    }
                })
            }
        )
    })
}

module.exports = { setSocketIo };

