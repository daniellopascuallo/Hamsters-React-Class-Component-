import React, { Component } from 'react';
import './App.css';
import Hamsters from './components/Hamsters';

// converting App function to a class function: we need a render() method that returns something return() with a <div><div/> where all info must be included

// If we want a state e need a constructor() method
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamsters: []
    }
  }

    render(){
      return(
        <div>
          {/* Add Component with tag (in one line, or more clear like below) and add the props to this component with key:value pairs (similar to how it was in html) and remember that if we pass something it is not a string we need curly braces (flow of data) */}
          <Hamsters 
            name="Chuckles"
            color="Brown"
            age={2}
            // we can pass a boolean of course:
            hasWheel={true}
          />
          <Hamsters 
            name="George"
            color="Light Grey"
            age={4}
            hasWheel={false}
          />
          <Hamsters 
            name="Tickles"
            color="Blue"
            age={5}
            hasWheel={true}
          />

          {/* To do this this way we do not need React, this is not the React way. Creating a components folder and a Component.jsx file */}
            {/* <div>
              <h2>Name: Chuckles</h2>
              <p>Fur Color: Brown</p>
              <p>Age: 2</p>
              <p>Has Wheel: Yes</p>
            </div>
            <div>
              <h2>Name: George</h2>
              <p>Fur Color: Light Grey</p>
              <p>Age: 4</p>
              <p>Has Wheel: No</p>
            </div>
            <div>
              <h2>Name: Tickles</h2>
              <p>Fur Color: Blue</p>
              <p>Age: 5</p>
              <p>Has Wheel: Yes</p>
            </div> */}
        </div>
      );
    }
}

export default App;
