import React, {Component} from "react";

class App8 extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
            <div>
                <h1>You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}</h1>
            </div>
        );
    }

}

export default App8