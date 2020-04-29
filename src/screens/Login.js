import React from 'react';
import '../styles/Login.css';


class Login extends React.Component{
    constructor(props) {
        super(props);


    }


    render(){
        return(
    <div class='formContainer'>
        <form class='loginForm' method='GET'>
            Username: <input id='username' />
            <br/>
            Password: <input id='password' />
            <br/>
            <input type='submit' class='loginbtn' />Login
            {/* The above should GET a response from the server and use auth to verify username and password. Need to figure out how to make my button do that. */}
            <br/>
        </form>
        <p>New member? Click <a class='signup' href='/signup'>here</a> to join the fellowship!</p>
    </div>
        );
    }
}

export default Login; 