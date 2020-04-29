import React from 'react';
import '../styles/Signup.css';
import '../forms/Terms-of-Service.pdf'
import buttonClicked from '../function.js';

const Signup = () => (


    <div class='mainSignup'>
        <form >
            <p>Please fill out the following information to sign up for an account.</p>
        First Name:<input id='fname' />
        <br/>
        Last Name:<input id='lname' />
        <br/>
        Email:<input id='email'  />
        <br/>
        Username:<input id='uname' />
        <br/>
        Password:<input id='password' />
        <br/>
        <input type='checkbox' class='tosBox' />Agree to <a href='/terms-of-service'>Terms of Service</a>
        <br/>
        <button class='signupBtn' onClick={buttonClicked()}>Sign Up!</button>
                    {/* The above button should POST to the database and create a new user. Need to figure out how to make my button do that. */}
        </form>
    </div>
)


export default Signup;