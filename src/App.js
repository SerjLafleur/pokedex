import React, { useState, useEffect } from 'react'
import { getPokemon } from './api'
import Navbar from './component/Navbar'
import SearchBar from './component/SearchBar'
import Pokedex from './component/Pokedex'
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemon()
      setPokemons(data.results)
    } catch (err) { }
  }


  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="App">
        <SearchBar />
        <Pokedex pokemons={pokemons} />
      </div>
    </div>
  );
}

export default App;
