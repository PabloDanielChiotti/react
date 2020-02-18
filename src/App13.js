import React, {Component} from "react";
import Conditional from "./components/Conditional";

class App13 extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    //Este lifecicle se corre cuando se renderiza el componente App13 por primera vez.
    //Entonces a penas se carga la pagina, se carga el componente, se renderiza y alli se ejecuta este metodo.
    //No es que se ejecuta el metodo y despues se renderiza
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    //Este lifecicle se ejecuta cada vez que cambian los valores en las props y/o en el state
    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        );
    }
}

export default App13