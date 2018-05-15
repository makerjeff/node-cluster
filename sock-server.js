const io = require('socket.io').listen(3000);

io.on('connection', (socket) => {
    console.log('connected: ', socket.client.id);

    socket.on('serverEvent', (data) => {
        console.log('message from client:', data);
    });

    let my_interval = setInterval( function() {
        socket.emit('clientEvent', Math.random());
        console.log('message sent to the clients');
    }, 1000);

});
