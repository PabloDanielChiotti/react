import React, {Component} from "react";

class App7 extends Component {
    constructor() {
        super()
        this.state = {
            name: "Polsky",
            age: 34
        }
    }

    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h3>Age: {this.state.age} years old</h3>
            </div>
        )
    }
}

export default App7