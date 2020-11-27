import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();
        console.log(email + ' ' + password);
        auth.signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/');
            })
            .catch(e => alert(e.message));
    };

    const signUp = e => {
        e.preventDefault();
        console.log(email+' '+password);
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/');
            })
            .catch(e => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className='login__logo' 
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                    alt=''/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInBtn">Sign In</button>
                </form>

                <p>
                    By signing in you agree to Amazon's Condition's
                    Use & Sale. Please see our privacy Nootice, our 
                    Cookies Notice and our interest-Based Ads Notice.
                </p>
                <button onClick={signUp} className="login__signUpBtn">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
