import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Additems({ todo, setTodo }) {
  const [newItem, setNewItem] = useState('');
  const navigate = useNavigate();

  function handleInputChange(e) {
    setNewItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === '') return;
    setTodo([...todo, newItem]);
    setNewItem('');
  }

  return (
    <div className="flex flex-col items-center mt-12 bg-white text-[hsl(200,100%,26%)] max-w-[600px] p-4 mx-auto">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="item" className="text-center font-bold text-5xl">
            <strong>TASK FLOW</strong>
          </label>
          <p className="mb-16 text-center italic">Keep track of your tasks!</p>
          <label htmlFor="item" className="text-center font-bold text-3xl"></label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={handleInputChange}
            className="outline-none border border-[hsl(200,100%,40%)] bg-[hsl(0,0%,100%)] rounded-[0.25em] px-[0.5em] py-[0.25em] text-[hsl(201,52%,31%)] focus:border-[hsl(200,100%,30%)]"
          />
        </div>
        <button
          className="bg-[hsl(199,100%,23%)] border border-[hsl(200,100%,50%)] text-[hsl(0,0%,99%)] px-[1px] py-[0.25em] rounded-[0.25em] cursor-pointer outline-none hover:bg-[hsl(200,100%,50%,0.2)] focus-visible:bg-[hsl(200,100%,50%,0.2)]"
          type="submit"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="bg-[hsl(199,100%,23%)] border border-[hsl(200,100%,50%)] text-[hsl(0,0%,99%)] px-[1px] py-[0.25em] rounded-[0.25em] cursor-pointer outline-none hover:bg-[hsl(200,100%,50%,0.2)] focus-visible:bg-[hsl(200,100%,50%,0.2)]"
        >
          Back
        </button>
      </form>
    </div>
  );
}
