import React from 'react';

const Pagination = (props) => {

    const { onClickLeft, onClickRigth, page, totalPages } = props

    return (
        <div className='pagination'>
            <button onClick={onClickLeft}>
                Last
            </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onClickRigth}>
                Next
            </button>
        </div>
    );
}

export default Pagination;