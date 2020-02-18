import React from "react";

function Joke(props) {

/*    return (
         !props.question ? <p>Punch Line: {props.punchLine}</p> : <p>Question: {props.question} and Punch Line: {props.punchLine}</p>
    )*/

    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke