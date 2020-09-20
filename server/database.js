const userList = {}
const rooms = {}
const setRooms = (roomId, userId) => {
    if (typeof rooms[roomId] == 'undefined') {
        rooms[roomId] = {open:true, users:[userId]}
    } else {
        if(rooms[roomId].open){
            rooms[roomId].users.push(userId)
        } else {
            return false
        }
    }
}

const getOpenRooms = () => {
    let roomList = ['AAA','BBB']
    for (const key in rooms) {
        if (rooms.hasOwnProperty(key)) {
            const room = rooms[key];
            if(room.open) roomList.push(key)
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

const removeUser = (roomId, userId) =>{
    rooms[roomId].users = rooms[roomId].users.filter(u=>u!=userId)
    delete userList[userId]
}

module.exports = {
    userList, 
    getOpenRooms,
    setRooms,
    getList,
    removeUser
}