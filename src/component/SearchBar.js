import React, { useState } from 'react';

const SearchBar = (props) => {

    const { onSearch } = props

    const [search, setSearch] = useState('')

    const handlerChange = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(null)
        }
    }

    const onClick = async (e) => {
        onSearch(search)
    }


    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input
                    placeholder='Buscar Pokemon...'
                    onChange={handlerChange}
                />
            </div>
            <div className="searchbar-btn">
                <button
                    onClick={onClick}
                >Buscar</button>
            </div>
        </div>
    );
}

export default SearchBar;