import React, { useState } from 'react';

const SearchBar = () => {

    const [search, setSearch] = useState('')

    const handlerChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div>
            <div>
                <input
                    placeholder='Buscar Pokemon..'
                    onChange={handlerChange}
                />
            </div>
            <div>{search}</div>
            <button>Buscar</button>
        </div>
    );
}

export default SearchBar;