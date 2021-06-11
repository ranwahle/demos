import React from 'react';
import styled from 'styled-components/macro';

let Comment = styled.div({
  border: '1px solid',
  padding: '0.5em'
});

export function Comments(props) {
  if (!props.post || !props.comments) {
    return '';
  }
  return <div>
    <h2>{props.post.title} ({props.post.id})</h2>
    <ul>
      {props.comments.map(comment => <Comment key={comment.id}>
        <p>postId: {comment.postId}</p>
        <p>name: {comment.name}</p>
        <p>email: {comment.email}</p>
        <p>{comment.body}</p>
      </Comment>)}
    </ul>
  </div>
}