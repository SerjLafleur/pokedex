import React from 'react';

const FavoriteContext = React.createContext({
    favoritePokemons: [],
    updateFavoritePokemons: (id) => null
})

export default FavoriteContext