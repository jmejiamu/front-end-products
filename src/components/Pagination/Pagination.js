import React from 'react';

const Pagination = ({ imgPerPage, totalImg, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalImg / imgPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="d-flex justify-content-center " >
            <ul className="pagination justify-content-center mb-4"  >
                {pageNumbers.map(number => (
                    <li key={number} className='page-item' >
                        <a onClick={() => paginate(number)} className='page-link' >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;