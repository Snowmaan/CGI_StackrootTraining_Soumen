import React from 'react';
import PostList from './postlist';
import AddPost from './Addpost';

function App() {
  return (
<div className="App">
<header className="App-header">
<h1>My Blog App</h1>
</header>
<main>
<AddPost />
<PostList />  
</main>
</div>
  );
}


export default App;
