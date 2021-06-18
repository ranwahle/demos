import React from 'react';
import styled from 'styled-components/macro';

let Message = styled.div({
  borderBottom: '1px solid',
  padding: '0.5em'
});

export function Messages(props) {
  if (!props.messages) {
    return '';
  }
  return <ul>
      {props.messages.map(message => <Message key={message.id}>
        <p>chatId: {message.chatId}</p>
        <p>messageId: {message.id}</p>
        <p>user: {message.user.name}</p>
        <p>{message.body}</p>
      </Message>)}
    </ul>;
}