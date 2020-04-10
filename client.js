const input = document.querySelector('input');
const messages = document.getElementById('messages');
const socket = io('http://localhost:3000');

socket.on('chat-message', (message) => {
  let li = document.createElement('li');
  li.innerText = message;
  messages.append(li);
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  let message = input.value;
  input.value = '';
  socket.emit('chat-message', message);
});