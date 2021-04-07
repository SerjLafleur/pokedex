import React, { useState, useEffect } from 'react'
import { getPokemon, getPokemonData } from './api'
import Navbar from './component/Navbar'
import SearchBar from './component/SearchBar'
import Pokedex from './component/Pokedex'
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemon(25, 25 * [page])
      const promise = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promise)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count / 25))
    } catch (err) { }
  }


  useEffect(() => {
    fetchPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div>
      <Navbar />
      <div className="App">
        <SearchBar />
        <Pokedex
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />

      </div>
    </div>
  );
}

export default App;
