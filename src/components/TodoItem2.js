import React from "react";
import "../style.css"

function TodoItem2(props) {

    const {text, completed} = props

    return (
        <div className="todo-item">
            <input type="checkbox" onChange={handleOnChange} checked={completed}/>
            <p>{text}</p>
        </div>
    )
}

function handleOnChange() {
    console.log("check update")
}

export default TodoItem2