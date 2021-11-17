import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    const user = {
      username: enteredUsername,
      age: enteredAge,
    };
    console.log(user);
    setEnteredUsername('');
    setEnteredAge('');
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            type="text"
            id="username"
            onChange={usernameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            value={enteredAge}
            type="number"
            id="age"
            onChange={ageChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
