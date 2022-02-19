import React, { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'please enter valid data'
            })
        }

        if (+age < 0) {
            setError({
                title: 'invalid input',
                message: 'please enter valid data'
            })
        }


        setUserName('');
        setAge('');

        props.onAddUser(userName, age);
    };

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const errorHandler = () =>{
        setError(null);
    }
    return (

        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler} >
                    <label htmlFor="username">User Nmae</label>
                    <input type='text' id='username' value={userName} onChange={usernameChangeHandler} />
                    <label htmlFor='age'>Age(Year)</label>
                    <input type='text' id='age' value={age} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;