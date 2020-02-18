import React, {Component} from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component {

    constructor() {
        super()
        this.state = {
            firstNameField: "",
            lastNameField: "",
            ageField: "",
            genderField: "",
            destinationField: "",
            vegetarianField: false,
            kosherField: false,
            lactoseFreeField: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    handleSubmit() {
        let result = `First Name: ${this.state.firstNameField}
        Last Name: ${this.state.lastNameField}
        Age: ${this.state.ageField}
        Gender: ${this.state.genderField}
        Location: ${this.state.destinationField}
        Dietary restrictions: 
        Vegetarian: ${this.state.vegetarianField ? "Yes" : "No"}
        Kosher: ${this.state.kosherField ? "Yes" : "No"}
        Lactose Free: ${this.state.lactoseFreeField ? "Yes" : "No"}`;
        alert(result)
    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state}
            />
        )
    }
}

export default FormContainer
