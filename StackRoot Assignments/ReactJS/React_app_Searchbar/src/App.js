// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import { SearchBar } from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className='searchbar-container'>
        <SearchBar/>
          {/* <div>SearchResults</div> */}
      </div>
    </div>
  );
}

export default App;
