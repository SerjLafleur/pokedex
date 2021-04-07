import React from 'react';
import Pokemon from './Pokemon'
import Pagination from './Pagination'
import Spinner from './Spinner'


const Pokedex = (props) => {

    const { pokemons, page, setPage, total, loading } = props

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0)
        setPage(nextPage)
    }

    const nextpage = () => {
        const nextPage = Math.min(page + 1, total)
        setPage(nextPage)
    }

    let imgUrl = 'https://sergiobaltanas.com/wp-content/uploads/2021/04/pokedex.png'


    return (
        <div>
            <div className='header'>
                <div className='pokedex'>
                    <img src={imgUrl} alt='img pokedex' />
                    <h1>Pokedex</h1>
                </div>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onClickLeft={lastPage}
                    onClickRigth={nextpage}
                />
            </div>
            {loading ? (<Spinner />) : (<div className='pokedex-grid'>
                {pokemons.map((pokemon, idx) => {
                    return (
                        <Pokemon pokemon={pokemon} key={pokemon.name} />
                    )
                })}
            </div>)}

        </div>
    );
}

export default Pokedex;