import React, {Component} from "react";
import Child from "./components/Child";

class App11 extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick() {
        this.setState(prevState => {
            return {
                count: prevState.count+1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleOnClick}>Change!</button>
                <Child count={this.state.count}/>
            </div>
        );
    }
}

export default App11