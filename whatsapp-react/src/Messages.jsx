import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { UsersContext } from './UsersContext';

let Message = styled.div({
  borderBottom: '1px solid',
  padding: '0.5em'
});

export function Messages(props) {
  let usersContext = useContext(UsersContext);

  if (!props.messages) {
    return '';
  }
  return <ul>
      {props.messages.map(message => {
        let user = usersContext.allUsers?.[message.userId];
        return <Message key={message.id}>
          <p>chatId: {message.chatId}</p>
          <p>messageId: {message.id}</p>
          <p>user: {user?.name}</p>
          <p>{message.body}</p>
        </Message>;
      })}
    </ul>;
}