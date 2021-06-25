import React, { useEffect, useRef, useState } from 'react';
import { Messages } from './Messages';
import { Pane, Panes } from './Panes';
import { Chats } from './Chats';
import { MessageForm } from './MessageForm';

export function App() {
  let [chats, setChats] = useState([]);
  let [chatId, setChatId] = useState(null);
  let [messages, setMessages] = useState([]);
  let [lastPoll, setLastPoll] = useState(Date.now());
  let [myUser, setMyUser] = useState({});
  let timer = useRef(null);

  useEffect(loadMyUser, []);
  useEffect(loadChats, []);
  useEffect(loadMessages, [chatId, lastPoll]);
  useEffect(startTimer, [lastPoll]);

  let selectedChat = chats.find((p) => p.id === chatId);

  return <Panes>
    <Pane width={'35%'} minWidth={'300px'}
      header={`User: ${myUser.name} (${myUser.id}) (lastPoll: ${lastPoll})`}
      body={<Chats chats={chats} onSelectChat={setChatId}></Chats>}>
    </Pane>
    <Pane width={'65%'}
      header={`Chat (${selectedChat?.id}): ${selectedChat?.users.map(user => user.name).join(', ')}`}
      body={<Messages messages={messages}></Messages>}
      footer={<MessageForm onNewMessage={onNewMessage}></MessageForm>}
      lastScroll={lastPoll}>
    </Pane>
  </Panes>;

  function loadMyUser() {
    import('./data/users_me')
      .then(module => {
        let user = module.user;
        setMyUser(user);
      });
  }

  function onNewMessage(body) {
    fetch(`/post/chats/${chatId}/messages`)
      .then(res => {
        let newMessage = {
          chatId,
          body,
          user: {name: 'Serge Krul'},
        };
        console.log(`Sending to the server: ${JSON.stringify(newMessage)}`);
        setLastPoll(Date.now());
      });
  }

  function loadChats() {
    import('./data/chats.js')
      .then(module => {
        let chats = module.chats;
        setChats(chats);
        setChatId(chats[0].id);
      });
  }

  function loadMessages() {
    if (!chatId) {
      return;
    }
    import(`./data/messages_${chatId}.js`)
      .then((module) => {
        let messages = module.messages;
        setMessages(addFakeMessage(messages));
      })
  }

  function startTimer() {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setLastPoll(Date.now());
    }, 5000);
  }
}

function addFakeMessage(messages) {
  let messageBeforeLast = messages[messages.length - 2];
  let newMessage = {...messageBeforeLast, id: Date.now()};
  messages.push(newMessage);
  return messages;
}