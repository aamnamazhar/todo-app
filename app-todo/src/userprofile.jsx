import React, { useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [editMode, setEditMode] = useState(false);
  const [newUser, setNewUser] = useState(user);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  }

  function handleSave() {
    setUser(newUser);
    setEditMode(false);
  }

  return (
    <div className="flex flex-col items-center mt-12 bg-white text-[hsl(200,100%,26%)] max-w-[600px] p-4 mx-auto">
      <h1 className="text-xl mb-4">User Profile</h1>
      {editMode ? (
        <div>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            onClick={() => setEditMode(false)}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}
