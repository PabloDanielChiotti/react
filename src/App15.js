import React, {Component} from "react";

class App15 extends Component {

    constructor() {
        super()
        this.state = {
            loading: true,
            character: {}
        }
    }

    componentDidMount() {
        console.log("Mounting the component.")

        fetch("https://swapi.co/api/people/2/")
            .then(response => response.json())
            .then(data =>
                this.setState({loading: false, character: data})
            )
    }

    render() {
        console.log("Rendering the component.")

        return (
            <div>
                {this.state.loading ? <h1>Loading...</h1> : <h1>{this.state.character.name}</h1>}
            </div>
        )
    }

}

export default App15
