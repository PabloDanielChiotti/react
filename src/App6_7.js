import React from "react";

class App6_7 extends React.Component {
    render() {
        return (
            <div>
                <Header username="manolo"/>
                <Greeting/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        const {username} = this.props
        return (
            <header><p>Welcome, {username}</p></header>
        )
    }
}

class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay = `Date:${date} - Hour:${hours}`
        return <p>{timeOfDay}</p>
    }
}

export default App6_7