import React, { useState } from 'react';

const LangTag = ({ text }) => {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSlected = () => {
        setIsSelected(!isSelected);
        console.log(`${text} is clicked`); // Console log
    }

    return (
        <p onClick={toggleSlected} className={`p-4 rounded-lg bg-secondary mx-2 hover:cursor-pointer ${isSelected ? 'ring ring-gray-300' : ''}`} >{text}</p>
    )
}

export default LangTag;