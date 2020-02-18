import React from "react";
import Product from "./components/Product";
import productsData from "./data/vschoolProducts"

function App3() {

    const products = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description}/>)

    return (
        <div>
            {products}
        </div>
    )
}

export default App3
