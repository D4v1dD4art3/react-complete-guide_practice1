import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'invalid input',
        message: 'please enter a valid name and age',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'invalid age',
        message: 'please enter a valid age',
      });
      return;
    }
    const user = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: enteredAge,
    };
    props.onAddUser(user);
    setEnteredUsername('');
    setEnteredAge('');
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
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
    </div>
  );
};

export default AddUser;
