import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Comments } from './Comments';
import { Posts } from './Posts';

let Panes = styled.main({
  display: 'flex',
  width: '100vw',
  height: '100vh'
});

let Pane = styled.div(props => ({
  overflow: 'auto',
    ...props
}));

export function App() {
  let [posts, setPosts] = useState([]);
  let [selectedId, setSelectedId] = useState(1);
  let [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((posts) => setPosts(posts))
  }, []);

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${selectedId}`)
      .then(res => res.json())
      .then((comments) => setComments(comments))
  }, [selectedId]);

  let selectedPost = posts.find((p) => p.id === selectedId);

  return <Panes>
    <Pane width={'35%'} minWidth={'300px'}>
      <Posts posts={posts} onSelectPost={setSelectedId}></Posts>
    </Pane>
    <Pane width={'65%'}>
      <Comments post={selectedPost} comments={comments}></Comments>
    </Pane>
  </Panes>;
}