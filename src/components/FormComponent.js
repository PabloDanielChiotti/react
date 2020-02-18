import React from "react";

function FormComponent(props) {
    return (
        <main>
            <form onSubmit={props.handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="firstNameField"
                        placeholder="First Name"
                        value={props.data.firstNameField}
                        onChange={props.handleChange}/>
                </label><br/>
                <label>
                    <input
                        type="text"
                        name="lastNameField"
                        placeholder="Last Name"
                        value={props.data.lastNameField}
                        onChange={props.handleChange}/>
                </label><br/>
                <label>
                    <input
                        type="number"
                        name="ageField"
                        placeholder="Age"
                        value={props.data.ageField}
                        onChange={props.handleChange}/>
                </label><br/>
                <label>
                    <input
                        type="radio"
                        name="genderField"
                        value="male"
                        checked={props.data.genderField === "male"}
                        onChange={props.handleChange}/>Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="genderField"
                        value="female"
                        checked={props.data.genderField === "female"}
                        onChange={props.handleChange}/>Female
                </label><br/>
                <label>
                    <select
                        name="destinationField"
                        value={props.data.destinationField}
                        onChange={props.handleChange}>
                        <option value="">-- Please choose a destination</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Roma">Roma</option>
                        <option value="Madrid">Madrid</option>
                    </select>
                </label><br/>

                <div>
                    <label>Dietary restrictions:</label><br/>
                    <label>
                        <input
                            type="checkbox"
                            name="vegetarianField"
                            checked={props.data.vegetarianField}
                            onChange={props.handleChange}/> Vegetarian
                    </label><br/>
                    <label>
                        <input
                            type="checkbox"
                            name="kosherField"
                            checked={props.data.kosherField}
                            onChange={props.handleChange}/> Kosher
                    </label><br/>
                    <label>
                        <input
                            type="checkbox"
                            name="lactoseFreeField"
                            checked={props.data.lactoseFreeField}
                            onChange={props.handleChange}/> Lactose free
                    </label><br/>
                </div>
                <button>Submit</button>
            </form>
        </main>
    )
}

export default FormComponent
