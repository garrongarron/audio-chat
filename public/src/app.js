import socketConnections from './Connections.js'
import './AudioChecking.js'
import socket from './Socket.js'
import showAvailableRooms from './AvailableRooms.js'
import myPeer from './Peer.js'
import mySelf from './MySelf.js'





myPeer.on('open', id => {
  // socket.emit('join-room', 'none', id, location.search.replace('?',''))
  mySelf.id = id
  showAvailableRooms(mySelf, socket)
})

socketConnections(socket)