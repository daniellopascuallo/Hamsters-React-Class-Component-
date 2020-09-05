import React, { Component } from 'react';

class Hamsters extends Component {
    // If we want things interactive we need state, and thus we need the constructor function. Once defined we need to displauy it correctly on the render() method, 
    constructor(props) {
        super(props);
        this.state= {
            hasWheel: props.hasWheel
        };
    }

    // create a function to update the state (usually called handleSomethig, being Something the something we want to handle) and that works with the setState() method: here we are handling the wheel with a boolean:

    handleWheel = () => {
        this.setState({hasWheel: !this.state.hasWheel});
    }

    render() {
        // passing props (an object) and we can destructur that props object sending the pieces of data the we have within the object props, what we want to pass. it has to be this.props;
        const {name, color, age, hasWheel} = this.props;

        return (
            // display all info in return: JSX expressions so all but strings must go within curly braces, like those variables we are passing: {name}, {age} (Flow of Data)
            <div>
                <h2>{name}</h2>
                <p>Fur Color: {color}</p>
                <p>Age: {age}</p>
                {/* Ternary operator on the variable (like an if statement):
                {is this condition true} ? {do something if true} : {do something if false} */}
                {/* <p>Has Wheel: {hasWheel ? "Yes" : "No"}</p> */}
                
                {/* Updated with the state instead of defined with the props because we are transfering the information from state now and not from props */}
                <p>Has Wheel: {this.state.hasWheel ? "Yes" : "No"}</p>

                {/* created a button and added a synthetic event listener (like event handlers in js, but these are methods created by React (jsx) and that mimic those in js) to handle interactivity of this button */}
                <button onClick={ this.handleWheel }>Change Wheel State</button>

            </div>
        );
    }
}

export default Hamsters;
