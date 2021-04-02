import React from 'react'
import Navbar from './component/Navbar'
import SearchBar from './component/SearchBar'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
