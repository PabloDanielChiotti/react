import React, {Component} from "react";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

class FinalProject extends Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header/>
                <MemeGenerator/>
            </div>
        )
    }
}

export default FinalProject