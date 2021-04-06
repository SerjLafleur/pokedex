import React from 'react';


const Pokemon = (props) => {

    const { pokemon } = props
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };
    const main_types = Object.keys(colors);

    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const color = colors[type];


    console.log(pokemon)

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    return (
        <div className='pokemon-card' style={{ backgroundColor: color }}>
            <div className='pokemon-img'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className='pokemon-id'>
                <div className='id'>
                    # {pokemon.id.toString().padStart(3, '0')}
                </div>
                <div>❤️</div>
            </div>
            <div className='pokemon-data'>
                <div className='name'>{name}</div>
                {pokemon.types.map((type, idx) => {
                    return <div className='pokemon-types' key={idx}> {type.type.name}</div>
                })}
            </div>


        </div>
    );
}

export default Pokemon;