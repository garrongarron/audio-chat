import peer from './Peer.js'
// var peer = new Peer();
let MyId = null
peer.on('open', function (id) {//#-1 get ID
    console.log('My peer ID is: ' + id);
    MyId = id
});

//#3 RECEIVE connection
peer.on('connection', function (conn) {
    conn.on('data', function (data) {
        console.log(conn.peer);
        print(conn.peer, data)
    });
});

//UI
let chat = document.createElement('div')
chat.classList.add('chat')
document.body.appendChild(chat)

let input = document.createElement('input')
input.placeholder = 'USER'
chat.appendChild(input)

let msg = document.createElement('input')
msg.placeholder = 'MSG'
chat.appendChild(msg)

let screen = document.createElement('textarea')
screen.placeholder = 'Display'
chat.appendChild(screen)



//Events
let conn = null
let write = (e) => {
    if (e.keyCode == 13 && msg.value.length > 3) {
        conn.send(msg.value)//#2 SEND
        print(user, "Yo mismo digo que")
        e.target.value = ''
    }
}

let print = (who, what) =>{
    screen.value += who+': '+what+"\n"
}

input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13 && input.value.length > 3) {
        conn = peer.connect(input.value);//#0 CONNECT // the id of the other client
        input.classList.add('hide')
        //
        conn.on('open', function () {//#1 OPEN
            msg.addEventListener('keydown', (e)=>{
                write(e)
            });
        });
    }
})