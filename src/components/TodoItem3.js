import React from "react";

function TodoItem3(props) {

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p className={props.item.completed ? "downloaded" : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem3
