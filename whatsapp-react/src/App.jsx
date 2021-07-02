import React, { useEffect, useRef, useState } from 'react';
import { Messages } from './Messages';
import { Pane, Panes } from './Panes';
import { Chats } from './Chats';
import { MessageForm } from './MessageForm';

const MY_USER_ID = '60bddb8019094d60c42557cf';
let get = (route) => fetch(`http://localhost:8080/api/${route}`).then(res => res.json())

export function App() {
  let [chats, setChats] = useState([]);
  let [chatId, setChatId] = useState(null);
  let [messages, setMessages] = useState([]);
  let [lastPoll, setLastPoll] = useState(Date.now());
  let [myUser, setMyUser] = useState({});
  let [friends, setFriends] = useState([]);
  let timer = useRef(null);

  useEffect(loadMyUser, []);
  useEffect(loadMyFriends, [myUser?.id]);
  useEffect(displayFriends, [friends]);
  useEffect(loadChats, []);
  useEffect(loadMessages, [chatId, lastPoll]);
  // useEffect(startTimer, [lastPoll]);

  let selectedChat = chats.find((chat) => chat._id === chatId);

  return <Panes>
    <Pane width={'35%'} minWidth={'300px'}
      header={`User: ${myUser.userName} (${myUser._id}) (lastPoll: ${lastPoll})`}
      body={<Chats chats={chats} onSelectChat={setChatId}></Chats>}>
    </Pane>
    <Pane width={'65%'}
      header={`Chat (${selectedChat?._id}): ${selectedChat?.userIds.map(user => user._id).join(', ')}`}
      body={<Messages messages={messages}></Messages>}
      footer={<MessageForm onNewMessage={onNewMessage}></MessageForm>}
      lastScroll={lastPoll}>
    </Pane>
  </Panes>;

  function loadMyUser() {
    get(`users/${MY_USER_ID}`)
      .then(user => {
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

  function displayFriends() {
    console.log(friends);
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
    get('chats').then(chats => {
      setChats(chats);
      setChatId(chats[0]._id);
    });
  }

  function loadMessages() {
    if (!chatId) {
      return;
    }
    get(`chats/${chatId}/messages`)
      .then((messages) => {
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