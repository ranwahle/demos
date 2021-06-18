import React, { useEffect, useState } from 'react';
import { Messages } from './Messages';
import { Pane, Panes } from './Panes';
import { Chats } from './Chats';

export function App() {
  let [chats, setChats] = useState([]);
  let [selectedId, setSelectedId] = useState(null);
  let [messages, setMessages] = useState([]);
  let [lastPoll, setLastPoll] = useState(Date.now());

  useEffect(() => {
    import('./data/chats.js')
      .then(module => {
        let chats = module.chats;
        setChats(chats);
        setSelectedId(chats[0].id);
      });
  }, []);

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    import(`./data/messages_${selectedId}.js`)
      .then((module) => {
        let messages = module.messages;
        setMessages(addFakeMessage(messages));
      })
  }, [selectedId, lastPoll]);

  useEffect(() => {
    setTimeout(() => {
      setLastPoll(Date.now());
    }, 5000);
  }, [lastPoll]);

  let selectedChat = chats.find((p) => p.id === selectedId);

  return <Panes>
    <Pane width={'35%'} minWidth={'300px'}
      header={`All Chats (lastPoll: ${lastPoll})`}
      body={<Chats chats={chats} onSelectChat={setSelectedId}></Chats>}>
    </Pane>
    <Pane width={'65%'}
      header={`${selectedChat?.users.map(user => user.name).join(', ')} (${selectedChat?.id})`}
      body={<Messages messages={messages}></Messages>}
      lastScroll={lastPoll}>
    </Pane>
  </Panes>;
}

function addFakeMessage(messages) {
  let messageBeforeLast = messages[messages.length - 2];
  let newMessage = {...messageBeforeLast, id: Date.now()};
  messages.push(newMessage);
  return messages;
}