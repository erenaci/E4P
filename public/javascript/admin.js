$(document).ready(() => {

  const socket = io();

  socket.on('user matched', user_matched);

  // removes a user from the waiting list
  function user_matched(user) {
    console.log('user matched ' + user);
    // TODO - remove user from whatever list
  }

  socket.on('user disconnect', end_chat);

  // ends a chat with given user
  function end_chat(user) {
    console.log('user disconnected ' + user);
    // TODO - close chat
  }

  // RECEIVE ^^^
  ///////////////////////////////////////
  // SEND    vvv

  $('#debug').submit((event) => {
    event.preventDefault();
    accept_user($('#user').val());
    $('#user').val('');
  });

  // accepts a waiting user
  function accept_user(user) {
    socket.emit('accept user', user);
  }
});
