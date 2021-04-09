import React, { useState, useEffect } from 'react'
import { getPokemon, getPokemonData, searchPokemon } from './api'
import FavoriteContext from './contexts/favoriteContext'
import Navbar from './component/Navbar'
import SearchBar from './component/SearchBar'
import Pokedex from './component/Pokedex'
import NotPokemon from './component/NotPokemon'
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState(false)
  const [searching, setSearching] = useState(false)

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
      setError(false)
    } catch (err) { }
  }

  const localStorageKey = 'favorite-pokemons'

  const loadFavoritesPokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(localStorageKey)) || []
    setFavorites(pokemons)

  }

  useEffect(() => {
    loadFavoritesPokemons()
  }, [])


  useEffect(() => {
    if (!searching) {
      fetchPokemons()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites]
    const isFavorite = updated.indexOf(name)
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1)
    } else {
      updated.push(name)
    }
    setFavorites(updated)
    window.localStorage.setItem(localStorageKey,
      JSON.stringify(updated)
    )
  }

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons()
    }
    setLoading(true)
    setError(false)
    setSearching(true)
    const result = await searchPokemon(pokemon)
    if (!result) {
      setError(true)
      setLoading(false)
      return
    } else {
      setPokemons([result])
      setPage(0)
      setTotal(1)
    }
    setLoading(false)
    setSearching(false)
  }

  return (
    <FavoriteContext.Provider value={{ favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons }} >
      <div>
        <Navbar />
        <div className="App">
          <SearchBar onSearch={onSearch} />
          {error ? <NotPokemon /> :
            <Pokedex
              loading={loading}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total}
            />
          }

        </div>
      </div>
    </FavoriteContext.Provider>
  );
}

export default App;
