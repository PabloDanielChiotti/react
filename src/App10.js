import React, {Component} from "react";

class App10 extends Component {
    render() {
        return (
            <div>
                <img src="https://www.fillmurray.com/g/155/300" onMouseOver={handleMouseOver}/>
                <br/>
                <br/>
                <button onClick={handleClick}>Click me</button>
            </div>
        )
    }
}

function handleClick() {
    console.log("I was clicked")
}

function handleMouseOver() {
    console.log("Mouse Over")
}

export default App10