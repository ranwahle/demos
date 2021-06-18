import React, { useEffect, useState } from 'react';
import { Messages } from './Messages';
import { Pane, Panes } from './Panes';
import { Chats } from './Chats';

export function App() {
  let [chats, setChats] = useState([]);
  let [selectedId, setSelectedId] = useState(null);
  let [messages, setMessages] = useState([]);

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
        setMessages(messages);
      })
  }, [selectedId]);

  let selectedChat = chats.find((p) => p.id === selectedId);

  return <Panes>
    <Pane width={'35%'} minWidth={'300px'}
      header={'All Chats'}
      body={<Chats chats={chats} onSelectChat={setSelectedId}></Chats>}>
    </Pane>
    <Pane width={'65%'}
      header={`${selectedChat?.users.map(user => user.name).join(', ')} (${selectedChat?.id})`}
      body={<Messages messages={messages}></Messages>}>
    </Pane>
  </Panes>;
}