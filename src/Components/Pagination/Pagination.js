import React from 'react';

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className='flex justify-center gap-x-2'>
            {
                pages?.map((page, i) =><button 
                key={i} 
                onClick={()=> setCurrentPage(page)} 
                className={
                    page === currentPage ? 
                    'border px-3 text-md text-black bg-rose-100' 
                    : 
                    'border px-3 text-md text-white'}
                    >
                        {page}
                    </button>)
            }
        </div>
    );
};

export default Pagination;