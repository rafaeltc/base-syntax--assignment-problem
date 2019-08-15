import React from "react";
import "./UserInput.css"

const userInput = props => {

    const style = {
        border: "1px solid #222aaa",
        boxShadow: "0 3px 7px #0c0f3b"
    }

    return (
        <div className="UserInput">
            <p>username:   <input type="text" 
                       style={style}
                       onChange={props.onChange} 
                       value={props.username}>
                </input>
            </p>
        </div>
    )
};
export default userInput;