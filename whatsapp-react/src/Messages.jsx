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
        let authorId = message.author._id;
        let author = usersContext.allUsers?.[authorId];
        return <Message key={message._id}>
          <p>chatId: {message.chat}</p>
          <p>date: {String(new Date(message.date))}</p>
          <p>messageId: {message._id}</p>
          <p>user: {author?.userName}</p>
          <p>{message.text}</p>
        </Message>;
      })}
    </ul>;
}