import React from 'react';

const Spinner = () => {

    const urlImg = 'https://sergiobaltanas.com/wp-content/uploads/2021/04/loading.gif'

    return (
        <div className='spinner'>
            <img src={urlImg} />
        </div>
    );
}

export default Spinner;