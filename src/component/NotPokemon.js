import React from 'react';

const NotPokemon = () => {

    const imgUrl = 'https://sergiobaltanas.com/wp-content/uploads/2021/04/404-pokemon.gif'
    return (
        <div className='error-pokemon'>
            <div>
                <h3>Error ese pokemon no existe</h3>
            </div>
            <div>
                <img src={imgUrl} alt='Not pokemon' />
            </div>
        </div>
    );
}

export default NotPokemon;