import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import TodoItem from "./components/TodoItem"
import ContactCard from "./components/ContactCard";
import ContactCardWithObj from "./components/ContactCardWithObj";

function App() {
    return (
        <div>
            <ContactCard
                name="Mr. Pol"
                imgUrl="http://placekitten.com/300/200"
                phone="(342) 4657487"
                email="mrpol@gmail.com"
            />
            <ContactCard
                name="Mr. Ramon"
                imgUrl="http://placekitten.com/400/200"
                phone="(342) 4623453"
                email="mrramon@gmail.com"
            />
            <ContactCardWithObj
                contact= {{
                    name: "Mr. Puchenko",
                    imgUrl: "http://placekitten.com/300/200",
                    phone: "(11) 49887765",
                    email: "puchenko@gmail.com"
            }}
            />
        </div>
    )
}

{/*
function App() {
    const todoListStyle = {
        backgroundColor: "white",
        margin: "auto",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #efefef",
        boxShadow: "0 1px 1px rgba(0,0,0,0.15)",
        padding: "30px"
    }

    return (
        <div style={todoListStyle}>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}
*/}

{/*
function App() {

    const firstName = "Polsky"
    const lastName = "Isirimovic"

    return (
        <div className="todo-list">
            <Header/>
            <h1>Hello {firstName + " " + lastName}!</h1>
            <MainContent/>
            <Footer/>
        </div>
    )
}
*/}

{/*
function App() {
    const date = new Date(2020, 5, 14, 9)
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }



    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

*/}




export default App