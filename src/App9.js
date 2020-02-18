import React, {Component} from "react";
import todosData from "./data/todosData";
import TodoItem2 from "./components/TodoItem2";

class App9 extends Component {

    constructor() {
        super()

        this.state = {
            todos : todosData
        }
    }

    render() {

        const tasks = this.state.todos.map(item => <TodoItem2 key={item.id} text={item.text} completed={item.completed}/>)

        return (
            <div className="todo-list">
                {tasks}
            </div>
        )
    }
}

export default App9
