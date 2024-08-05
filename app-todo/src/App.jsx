import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Additems from './additems';
import UserProfile from './userprofile';
import Viewitems from './viewitems';

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <>
    <div className="flex flex-col items-center mt-12 bg-white text-[hsl(200,100%,26%)] max-w-[600px] p-4 mx-auto">
      <form className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="item" className="text-center font-bold text-5xl">
            <strong>TASK FLOW</strong>
          </label>
          <p className="mb-16 text-center italic">Keep track of your tasks!</p>
    <div className="navigation-buttons flex justify-center mt-4">
      <button
        onClick={() => navigate('/additems')}
        className=" text-white bg-blue-400 px-4 py-2 rounded mr-2 hover:bg-blue-600"
      >
        Add Items
      </button>
      <button
        onClick={() => navigate('/userprofile')}
        className="bg-blue-400 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
      >
        User Profile
      </button>
      <button
        onClick={() => navigate('/viewitems')}
        className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Items
      </button>
    </div>
    </div>
    </form>
    </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationButtons /> {/* Add navigation buttons here */}
        <Routes>
          <Route path="/additems" element={<Additems />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/viewitems" element={<Viewitems />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
