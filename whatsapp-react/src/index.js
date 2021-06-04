import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

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

function Comments(props) {
  if (!props.post || !props.comments) {
    return '';
  }
  let commentStyle = {
    border: '1px solid',
    padding: '0.5em'
  };
  return <div>
    <h2>{props.post.title} ({props.post.id})</h2>
    <ul>
      {props.comments.map(comment => <div key={comment.id} style={commentStyle}>
        <p>postId: {comment.postId}</p>
        <p>name: {comment.name}</p>
        <p>email: {comment.email}</p>
        <p>{comment.body}</p>
      </div>)}
    </ul>
  </div>
}

function Posts(props) {
  let postStyle = {
    border: '1px solid',
    padding: '0.5em',
    cursor: 'pointer'
  }
  return <ul>
    {props.posts.map(post => {
      return <div style={postStyle} key={post.id} onClick={() => props.onSelectPost(post.id)}>
        {post.title} ({post.id})
      </div>
    })}
  </ul>
}

function Panes(props) {
  let mainStyle = {
    display: 'flex',
    width: '100vw',
    height: '100vh'
  };
  return <main style={mainStyle}>{props.children}</main>
}

function Pane(props) {
  let paneStyle = {
    overflow: 'auto',
    ...props
  }
  return <div style={paneStyle}>{props.children}</div>
}
