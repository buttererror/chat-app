let socket = io();

socket.on('message', (message) => {
    console.log(message);
});

socket.on('user connected', () => {
    console.log('new user connected');
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let message = e.target.elements.message.value;
    socket.emit('sendMessage', message);

});