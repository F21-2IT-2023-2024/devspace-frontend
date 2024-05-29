import React from 'react';

export default function AddSnippetModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="p-4 bg-primary-700 w-96 h-96 relative">
        <button onClick={onClose} className='absolute top-0 right-0 px-3 text-2xl'>x</button>
        <h2 className="text-xl mb-4">Post Snippet</h2>
        <h4>Snippet:</h4>
        <textarea 
          name="snippetField" 
          id="snippetContent" 
          rows="4" cols="30" 
          placeholder='Enter your snippet here...'
          className='resize-none bg-primary-900 text-secondary p-2 rounded-sm w-full focus:outline-none text-xs placeholder:text-sm placeholder:italic'>
        </textarea>
        <button className='bg-primary-accent text-primary px-4 py-2 mt-4 rounded-sm my-4'>Post</button>
      </div>
    </div>
  );
}