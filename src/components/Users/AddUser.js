import React, { useState } from 'react';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" />
      </div>
      <button type="submit">Add a user</button>
    </form>
  );
};

export default AddUser;
