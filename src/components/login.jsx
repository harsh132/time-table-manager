import React from 'react';
import './css/login.css';

const Login = ({signInWithGoogle}) => {
    return ( <div className="container"><button onClick={signInWithGoogle} className="g-button"><img className="g-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png" alt="Google Logo"></img><p className="g-text">Sign in with Google</p></button></div> );
}
 
export default Login;