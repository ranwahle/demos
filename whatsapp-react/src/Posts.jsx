import React from 'react';
import styled from 'styled-components/macro';

let Post = styled.div({
  borderBottom: '1px solid',
  padding: '0.5em',
  cursor: 'pointer',
});

export function Posts(props) {
  return <ul>
    {props.posts.map(post => {
      return <Post key={post.id} onClick={() => props.onSelectPost(post.id)}>
        {post.title} ({post.id})
      </Post>
    })}
  </ul>
}