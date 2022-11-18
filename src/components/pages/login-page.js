import React from "react";
import { Redirect,useNavigate } from 'react-router-dom';

const LoginPage = ({ isLoggedIn,onLogin }) => {

    let navigate = useNavigate();

    if(isLoggedIn) {
        navigate("/")
    }

    return(
        <div className="jumbotron">
            <p>Loin to see secret page!</p>
            <button 
                className="btn btn-primary"
                onClick={onLogin}>
                    Login
            </button>
        </div>
    );
}

export default LoginPage;