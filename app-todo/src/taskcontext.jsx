import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  return (
    <TaskContext.Provider value={{ todo, setTodo, done, setDone }}>
      {children}
    </TaskContext.Provider>
  );
};
