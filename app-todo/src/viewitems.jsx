import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Viewitems({ todo, setTodo, done, setDone }) {
  const navigate = useNavigate();

  function handleDelete(index) {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  function handleDone(index) {
    const newDoneItem = todo[index];
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
    setDone([...done, newDoneItem]);
  }

  return (
    <div className="flex flex-col items-center mt-12 bg-white text-[hsl(200,100%,26%)] max-w-[600px] p-4 mx-auto">
         <div className="flex flex-col gap-1">
          <label htmlFor="item" className="text-center font-bold text-5xl">
            <strong>TASK FLOW</strong>
          </label>
          <p className="mb-16 text-center italic">Keep track of your tasks!</p>
      <h1 className="text-xl mt-6 mb-2">Tasks To Do</h1>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Task</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-[hsl(0,100%,40%,0.1)] border border-[hsl(0,100%,40%)] text-[hsl(0,100%,40%)] px-[1px] py-[0.25em] rounded-[0.25em] cursor-pointer outline-none hover:bg-[hsl(0,100%,40%,0.2)] focus-visible:bg-[hsl(0,100%,40%,0.2)]"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <button
                  className="bg-cyan-600 text-white px-2 py-1 rounded-md hover:bg-slate-500 ml-2"
                  onClick={() => handleDone(index)}
                >
                  Done
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-white bg-blue-400 px-4 py-2 rounded mr-2 hover:bg-blue-600bg-[hsl(199,100%,23%)] border border-[hsl(200,100%,50%)] text-[hsl(0,0%,99%)] px-[1px] py-[0.25em] rounded-[0.25em] cursor-pointer outline-none hover:bg-[hsl(200,100%,50%,0.2)] focus-visible:bg-[hsl(200,100%,50%,0.2)]"
      >
        Back
      </button>
      </div>
    </div>
  );
}
