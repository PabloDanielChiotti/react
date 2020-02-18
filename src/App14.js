import React, {Component} from "react";

class App14 extends Component {

    constructor() {
        super();
        this.state = {
            logged: true
        }

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick() {
        {/*
        if (this.state.logged) {
            this.setState({logged: false})
        } else {
            this.setState({logged: true})
        }*/}

        this.setState(prevState => {
            return {
                logged: !prevState.logged
            }
        })
    }

    componentDidMount() {
        console.log("mount")
    }

    render() {
        console.log("render")
        let buttonText = this.state.logged ? "LOG OUT" : "LOG IN"
        let displayText = this.state.logged ? "Logged in" : "Logged out"
        return (
            <div>
                <h1>{displayText}</h1>
                <button onClick={this.handleButtonClick}>{buttonText}</button>
            </div>
        )

        {/*
        return (
            <div>
                {this.state.logged ? <h1>LOGGEADO</h1> : <h1>NO LOGGEADO</h1>}
                {this.state.logged ? <button onClick={this.handleButtonClick}>LOG OUT</button> : <button onClick={this.handleButtonClick}>LOG IN</button>}
            </div>
        )*/}
    }
}

export default App14