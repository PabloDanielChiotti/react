import React from "react";

function App6() {
    return (
        <div>
            <Header username="manolo"/>
            <Greeting/>
        </div>
    )
}

function Header(props) {
    const {username} = props
    return (
        <header>
            <p>Welcome, {username}</p>
        </header>
    )
}

function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay = `Date:${date} - Hour:${hours}`
    return (
        <p>{timeOfDay}</p>
    )
}

export default App6