import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function App() {
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

let Comment = styled.div({
  border: '1px solid',
  padding: '0.5em'
});

function Comments(props) {
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

let Post = styled.div({
  border: '1px solid',
  padding: '0.5em',
  cursor: 'pointer',
});

function Posts(props) {
  return <ul>
    {props.posts.map(post => {
      return <Post key={post.id} onClick={() => props.onSelectPost(post.id)}>
        {post.title} ({post.id})
      </Post>
    })}
  </ul>
}

let Panes = styled.main({
  display: 'flex',
  width: '100vw',
  height: '100vh'
});


let Pane = styled.div(props => ({
  overflow: 'auto',
    ...props
}));




ReactDOM.render(
  <App />,
  document.getElementById('root')
);