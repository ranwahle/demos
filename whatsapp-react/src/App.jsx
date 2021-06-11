import React, { useEffect, useState } from 'react';
import { Comments } from './Comments';
import { Pane, Panes } from './Panes';
import { Posts } from './Posts';

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
    <Pane width={'35%'} minWidth={'300px'}
      header={'All Posts'}
      body={<Posts posts={posts} onSelectPost={setSelectedId}></Posts>}>
    </Pane>
    <Pane width={'65%'}
      header={`${selectedPost?.title} (${selectedPost?.id})`}
      body={<Comments comments={comments}></Comments>}>
    </Pane>
  </Panes>;
}