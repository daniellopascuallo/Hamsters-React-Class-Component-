import React, { Component } from 'react';

class Hamsters extends Component {
    // We get rid of the constructor and the method, we don't define the state on this component

    render() {
        // Lifting state: we just want to pass down props, no state, so we put back the hasWheel prop and also we pass down the handleWheel prop from App.js wich will handle it (modify it on the button below too)

        // .map(): key is the only prop that is not passed down, so we won't be able to get that index number even if we pass it here, but we want to pass the index number: so we pass a new prop idx.
        const {name, color, age, hasWheel, handleWheel, idx} = this.props;
        return (
            // display all info in return: jsx expressions, so all but strings must go within curly braces, like those variables we are passing: {name}, {age} (Flow of Data)
            // Adding some bootstrap with card and btn (className is jsx version of html class)
            <div className="card col-3 text-center">
                <h2>{name}</h2>
                <p>Fur Color: {color}</p>
                <p>Age: {age}</p>

                {/* back to the prop definition instead of the state definition */}
                <p>Has Wheel: {hasWheel ? "Yes" : "No"}</p>
                {/* <p>Has Wheel: {this.state.hasWheel ? "Yes" : "No"}</p> */}
                
                {/* We are passing the prop so modified to that on the event: from this.handleWheel to just handleWheel */}
                
                {/* We are passing now idx as an argument of the handleWheel function but if we dont want to inmmediately invoke it, we need to pass an anonymous function there: () =>*/}
                <button className="btn btn-warning" onClick={ () => handleWheel(idx)}>Change Wheel State</button>
            </div>
        );
    }
}

export default Hamsters;
