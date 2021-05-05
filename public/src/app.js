import socket from './Socket.js'
import myPeer from './Peer.js'
import mySelf from './MySelf.js'
import showAvailableRooms from './AvailableRooms.js'
import socketConnections from './Connections.js'
import authentication, { setCallback } from './Authentication.js'


myPeer.on('open', id => {
  mySelf.id = id
  if (localStorage.getItem('name')) {
    showAvailableRooms(mySelf, socket, localStorage.getItem('name'))
  } 
})

if (!localStorage.getItem('name')) {
  document.body.appendChild(authentication)
  setCallback((username) => {
    showAvailableRooms(mySelf, socket, username)
  })
}

socketConnections(socket)