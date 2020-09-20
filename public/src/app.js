import socketConnections from './Connections.js'
import './AudioChecking.js'
import socket from './Socket.js'
import showAvailableRooms from './AvailableRooms.js'
import myPeer from './Peer.js'
import mySelf from './MySelf.js'
import authentication, { setCallback } from './Authentication.js'
import './Chat.js'

myPeer.on('open', id => {
  mySelf.id = id
})

if (localStorage.getItem('name')) {
  showAvailableRooms(mySelf, socket, localStorage.getItem('name'))
} else {
  setCallback((username) => {
    showAvailableRooms(mySelf, socket, username)
  })
  document.body.appendChild(authentication)
}



socketConnections(socket)