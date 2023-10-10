import React from 'react';
import './App.css';
import ClothingStore from './components/Clothingstore';
import Navbar from './Navbar';
import SearchBar from './searchbar'



function App() {
  return(
     <div className="App">
      <header className="clothing-store">
      <h1>Clothing Store</h1>
      <ClothingStore />
        <div className='nav'>
        <Navbar />
        <div className='{styles.container}'>
        <SearchBar />
        </div>
        </div>
      </header>
    </div>
  );
}


export default App;