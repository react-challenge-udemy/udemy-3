import React, { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'
import classes from './AddUser.module.css';

const AddUser = () => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
      };
    return (


        <Card >
            <form onSubmit={addUserHandler} >
                <label htmlFor="username">User Nmae</label>
                <input type='text' id='username' />
                <label htmlFor='age'>Age(Year)</label>
                <input type='text' id='age' />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>

    );
}

export default AddUser;