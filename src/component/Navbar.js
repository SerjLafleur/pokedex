import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoriteContext'


const Navbar = () => {

    const { favoritePokemons } = useContext(FavoriteContext)

    console.log(favoritePokemons)
    return (
        <nav>
            <div />
            <div>
                <img
                    src='https://sergiobaltanas.com/wp-content/uploads/2021/04/logo-pokemon.png'
                    alt='logo-pokemon'
                />
            </div>
            <div>❤️ {favoritePokemons.length}</div>
        </nav>
    );
}

export default Navbar;