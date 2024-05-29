import React, { useState } from 'react';
import Modal from './AddSnippetModal';

export default function AddSnippetBtn() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <button 
        onClick={handleClick} 
        className="bg-primary-700 w-12 h-12 outline outline-1 outline-secondary m-4 rounded text-xl">
        +
      </button>
      {showModal && <Modal onClose={handleClick} />}
    </div>
  );
}