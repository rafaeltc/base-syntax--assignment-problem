import React from "react";
import "./UserInput.css"

const userInput = props => {
    return (
        <div className="UserInput">
            <p>username: <input onChange={props.onChange} value={props.username}></input></p>
        </div>
    )
};
export default userInput;