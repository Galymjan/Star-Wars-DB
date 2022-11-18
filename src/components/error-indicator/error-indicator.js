import React from "react";
import jpg from './images.jpg';

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <img src={jpg} alt ="error"/>
            <span className="boom">BOOM!</span>
            
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we alredy sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;