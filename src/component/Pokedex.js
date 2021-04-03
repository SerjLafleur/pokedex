import React from 'react';

const Pokedex = (props) => {

    const { pokemons } = props

    console.log(pokemons)

    let imgUrl = 'https://sergiobaltanas.com/wp-content/uploads/2021/04/pokedex.png'
    return (
        <div>
            <div className='header'>
                <div className='pokedex'>
                    <img src={imgUrl} alt='img pokedex' />
                    <h1>Pokedex</h1>
                </div>
                <div>Pagination</div>
            </div>
            <div className='pokedex-grid'>
                {pokemons.map((pokemon, idx) => {
                    return (
                        <div key={pokemon.name}>{idx + 1}: {pokemon.name}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default Pokedex;