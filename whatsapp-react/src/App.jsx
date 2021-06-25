import React, { useEffect, useRef, useState } from 'react';
import { Messages } from './Messages';
import { Pane, Panes } from './Panes';
import { Chats } from './Chats';

export function App() {
  let [chats, setChats] = useState([]);
  let [chatId, setChatId] = useState(null);
  let [messages, setMessages] = useState([]);
  let [lastPoll, setLastPoll] = useState(Date.now());
  let timer = useRef(null);

  useEffect(loadChats, []);
  useEffect(loadMessages, [chatId, lastPoll]);
  useEffect(startTimer, [lastPoll]);

  let selectedChat = chats.find((p) => p.id === chatId);

  return <Panes>
    <Pane width={'35%'} minWidth={'300px'}
      header={`All Chats (lastPoll: ${lastPoll})`}
      body={<Chats chats={chats} onSelectChat={setChatId}></Chats>}>
    </Pane>
    <Pane width={'65%'}
      header={`${selectedChat?.users.map(user => user.name).join(', ')} (${selectedChat?.id})`}
      body={<Messages messages={messages}></Messages>}
      footer={<form onSubmit={onNewMessage}>
        <input id={'newMessage'}></input>
      </form>}
      lastScroll={lastPoll}>
    </Pane>
  </Panes>;

  function onNewMessage(e) {
    e.preventDefault();
    fetch(`/post/chats/${chatId}/messages`)
      .then(res => {
        let newMessage = {
          body: e.target.newMessage.value,
          user: {name: 'Serge Krul'},
          chatId
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