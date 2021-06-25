import React, { useEffect, useRef, useState } from 'react';
import { Messages } from './Messages';
import { Pane, Panes } from './Panes';
import { Chats } from './Chats';
import { MessageForm } from './MessageForm';
import { UsersContext } from './UsersContext';

export function App() {
  let [chats, setChats] = useState([]);
  let [chatId, setChatId] = useState(null);
  let [messages, setMessages] = useState([]);
  let [lastPoll, setLastPoll] = useState(Date.now());
  let [myUser, setMyUser] = useState({});
  let [friends, setFriends] = useState([]);
  let timer = useRef(null);
  let usersContext = useRef({});

  useEffect(loadMyUser, []);
  useEffect(loadMyFriends, [myUser]);
  useEffect(updateUsersContext, [myUser, friends]);
  useEffect(loadChats, [myUser]);
  useEffect(loadMessages, [chatId, lastPoll]);
  useEffect(startTimer, [lastPoll]);

  let selectedChat = chats.find((p) => p.id === chatId);

  return <UsersContext.Provider value={usersContext.current}>
      <Panes>
      <Pane width={'35%'} minWidth={'300px'}
        header={`User: ${myUser.name} (${myUser.id}) (lastPoll: ${lastPoll})`}
        body={<Chats chats={chats} onSelectChat={setChatId}></Chats>}>
      </Pane>
      <Pane width={'65%'}
        header={`Chat (${selectedChat?.id}): ${getChatUsersList(selectedChat)}`}
        body={<Messages messages={messages}></Messages>}
        footer={<MessageForm onNewMessage={onNewMessage}></MessageForm>}
        lastScroll={lastPoll}>
      </Pane>
    </Panes>
  </UsersContext.Provider>;

  function getChatUsersList(chat) {
    return chat?.userIds.map(userId => usersContext.current.allUsers?.[userId].name).join(', ');
  }

  function loadMyUser() {
    import('./data/users_me')
      .then(module => {
        let user = module.user;
        setMyUser(user);
      });
  }

  function loadMyFriends() {
    if (!myUser.id) {
      return;
    }
    import(`./data/users_${myUser.id}_friends`)
      .then(module => {
        let friends = module.friends;
        setFriends(friends);
      });
  }

  function updateUsersContext() {
    usersContext.current = {
      myUser,
      allUsers: friends.concat(myUser).reduce((map, friend) => {
        map[friend.id] = friend;
        return map;
      }, {})
    };
  }

  function onNewMessage(body) {
    fetch(`/post/chats/${chatId}/messages`)
      .then(res => {
        let newMessage = {
          chatId,
          body,
          userId: myUser.id,
        };
        console.log(`Sending to the server: ${JSON.stringify(newMessage)}`);
        setLastPoll(Date.now());
      });
  }

  function loadChats() {
    if (!myUser.id) {
      return;
    }
    import(`./data/chats_${myUser.id}.js`)
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