import React from "react";

function Product(props) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Price: {props.price}</h3>
            <h3>Description: {props.description}</h3>
            <hr/>
        </div>
    )
}

export default Product