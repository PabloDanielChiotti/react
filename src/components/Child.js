import React, {Component} from "react";

class Child extends Component {
    render(props) {
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        );
    }
}

export default Child