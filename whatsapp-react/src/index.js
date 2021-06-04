import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(postsRes => setPosts(postsRes));
  }, []);

  return <Panes>
    <Pane width={'35%'} minWidth={'300px'}>
      <Posts posts={posts}></Posts>
    </Pane>
    <Pane width={'65%'}>
      here be comments
    </Pane>
  </Panes>;
}

function Posts(props) {
  let postStyle = {
    border: '1px solid',
    padding: '0.5em',
    cursor: 'pointer'
  }
  return <ul>
    {props.posts.map(post => {
      return <div style={postStyle} key={post.id}>
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
