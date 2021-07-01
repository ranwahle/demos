import React, { useEffect, useRef, useState } from 'react';
import { Messages } from './Messages';
import { Pane, Panes } from './Panes';
import { Chats } from './Chats';
import { MessageForm } from './MessageForm';
import { UsersContext } from './UsersContext';

const API_URL = 'http://localhost:8080/api';

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

  let selectedChat = chats.find((c) => c._id === chatId);

  return <UsersContext.Provider value={usersContext.current}>
      <Panes>
      <Pane width={'35%'} minWidth={'300px'}
        header={`User: ${myUser.userName} (lastPoll: ${lastPoll})`}
        body={<Chats chats={chats} onSelectChat={setChatId}></Chats>}>
      </Pane>
      <Pane width={'65%'}
        header={`Chat (${selectedChat?._id}): ${getChatUsersList(selectedChat)}`}
        body={<Messages messages={messages}></Messages>}
        footer={<MessageForm onNewMessage={onNewMessage}></MessageForm>}
        lastScroll={lastPoll}>
      </Pane>
    </Panes>
  </UsersContext.Provider>;

  function getChatUsersList(chat) {
    // TODO hack, userIds should be an array
    let userIds = chat?.userIds.map(user => user._id);
    return userIds?.map(userId => usersContext.current.allUsers?.[userId]?.userName).join(', ');
  }

  function loadMyUser() {
    // TODO this should be saved in a cookie and sent to /api/users/me
    const MY_USER_ID = '60bddb8019094d60c42557cf';
    fetch(`${API_URL}/users/${MY_USER_ID}`)
      .then(res => res.json())
      .then(user => {
        setMyUser(user);
      });
  }

  function loadMyFriends() {
    if (!myUser._id) {
      return;
    }
    // TODO its a hack, should bring only users that are my contacts
    fetch(`${API_URL}/users`)
      .then(res => res.json())
      .then(allUsers => {
        let friends = allUsers.filter(u => u._id !== myUser._id);
        console.log('friends', friends);
        setFriends(friends);
      });
  }

  function updateUsersContext() {
    usersContext.current = {
      myUser,
      allUsers: friends.concat(myUser).reduce((map, friend) => {
        map[friend._id] = friend;
        return map;
      }, {})
    };
  }

  function onNewMessage(text) {
    let newMessage = {
      chat: chatId, // TODO rename to chatId
      text,
      date: String(new Date()), // TODO should be timestamp
      picURL: '',
      author: myUser, // TODO should only send userId
    };

    fetch(`${API_URL}/chats/${chatId}/messages`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMessage)
    }).then(res => {
        console.log(`Sent to the server: ${JSON.stringify(newMessage)}`);
        setLastPoll(Date.now());
      });
  }

  function loadChats() {
    if (!myUser._id) {
      return;
    }
    // TODO rename this api to /chats?userId=XXX
    fetch(`${API_URL}/friends/${myUser._id}`)
      .then(res => res.json())
      .then(chats => {
        console.log('chats', chats);
        setChats(chats);
        setChatId(chats[0]._id);
      });
  }

  function loadMessages() {
    if (!chatId) {
      return;
    }
    fetch(`${API_URL}/chats/${chatId}/messages`)
      .then(res => res.json())
      .then((messages) => {
        console.log('messages', messages);
        setMessages(messages);
      })
  }

  function startTimer() {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setLastPoll(Date.now());
    }, 5000);
  }
}