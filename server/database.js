const userList = {}
const rooms = {}
const setRooms = (roomId, userId) => {
    if (typeof rooms[roomId] == 'undefined') {
        //new ROOM
        rooms[roomId] = { open: true, users: [userId] }
    } else {
        if (rooms[roomId].open) {
            rooms[roomId].users.push(userId)
        } else {
            return false
        }
    }
}
const closeRoom = (roomId) => {
    rooms[roomId].open = false
}
const getOpenRooms = () => {
    let roomList = []
    for (const key in rooms) {
        if (rooms.hasOwnProperty(key)) {
            if (rooms[key].open) roomList.push(key)
        }
    }
    return roomList
}
const getList = (roomId) => {
    let list = {}
    rooms[roomId].users.map(u => {
        list[u] = userList[u]
    })
    return list
}
const removeUser = (roomId, userId) => {
    delete userList[userId]
    rooms[roomId].users = rooms[roomId].users
        .filter(u => u != userId)
    if (rooms[roomId].users.length == 0) {
        delete rooms[roomId]
        return false
    }
    return true
}
const database = {
    userList,
    getOpenRooms,
    setRooms,
    getList,
    removeUser,
    closeRoom
}
module.exports = database