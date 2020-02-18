import React from "react";

function ContactCard(props) {
    console.log(props)
    return (
        <div>
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}


export default ContactCard