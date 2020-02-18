import React from "react";
import TodoItem2 from "./components/TodoItem2";
import tasksData from "./data/todosData"

function App4() {

    const tasks = tasksData.map(task => <TodoItem2 key={task.id} text={task.text} completed={task.completed}/>)

    return (
        <div>
            {tasks}
        </div>
    )
}

export default App4