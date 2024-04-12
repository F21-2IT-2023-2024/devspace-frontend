import React, { useState } from 'react';

function Heart() {

    const [isLiked, setIsLiked] = useState(false);

    const toggleLiked = () => {
        setIsLiked(!isLiked)
    };

    return (
        <>
            <svg onClick={toggleLiked} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500 cursor-pointer" fill={isLiked ? "red " : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5l-1.45-1.32C5.4 16.29 2 13.36 2 9.5 2 7.01 3.5 5 5.5 5c1.34 0 2.61.99 3.5 2.5C9.89 5.99 11.16 5 12.5 5c2 0 3.5 2.01 3.5 4.5 0 3.86-3.4 6.79-8.55 10.68L12 21.5z"></path>
            </svg>
        </>
    )
}

export default Heart;