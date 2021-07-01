import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/macro';
import { UsersContext } from './UsersContext';

let Chat = styled.div({
  borderBottom: '1px solid',
  padding: '0.5em',
  cursor: 'pointer',
});

export function Chats(props) {
  let currentContext = useContext(UsersContext);

  useEffect(() => {
    console.log(currentContext);
  }, [currentContext]);

  return <ul>
    {props.chats.map(chat => {
      return <Chat key={chat._id} onClick={() => props.onSelectChat(chat._id)}>
        {chat.title} ({chat._id})
      </Chat>
    })}
  </ul>
}