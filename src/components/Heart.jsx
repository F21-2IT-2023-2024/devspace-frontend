import React, { useState } from 'react';

export default function Heart() {

    const [isLiked, setIsLiked] = useState(false);

    const toggleLiked = () => {
        setIsLiked(!isLiked)
    };

    return (
        <>
            <svg onClick={toggleLiked} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500 cursor-pointer pb-1" fill={isLiked ? "red" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.35l-1.45-1.32C4.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.06 4.5 2.72C13.09 4.06 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-2.4 6.86-8.55 10.53L12 20.35z"></path>
            </svg>
        </>
    )
}