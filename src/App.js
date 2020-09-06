import React, { Component } from 'react';
import './App.css';
// import Hamsters from './components/Hamsters';
// Added new component HLS: HamstersLiftingState to update with Lifting State and modified below
import HamstersLiftingState from './components/HamstersLiftingState';
import 'bootstrap/dist/css/bootstrap.min.css';

// converting App function to a class function: we need a render() method that returns something return() with a <div><div/> where all info must be included

// If we want a state we need a constructor() method. Info in React is passed downwards: from App.js to other components.
// HLS: we are adding the state here now, the functionality, instead of in the child component (Hamsters/HLS)
class App extends Component {
  constructor(props) {
    super(props);
    // the original state will be an array (hamsters) with objects where we enter all the info we had before:
    this.state = {
      hamsters: [
        {name: "Chuckles", color: "Brown", age: 2, hasWheel: true},
        {name: "George", color: "Light Grey", age: 4, hasWheel: false},
        {name: "Tickles", color: "Blue", age: 5, hasWheel: true}
      ]
    }
  }

  // created handleWheel function with index as the argument:
  handleWheel = (index) => {
    // ??? Not working, I cannot find out the solution for this as I had the other setState in Hamsters.jsx:
    // console.log(index);
    // this.setState({hamsters: [...this.state.hamsters[index], !this.state.hamsters[index].hasWheel]});

    // Adrien's workaround:
    console.log(index);
    let newArr  = [...this.state.hamsters];
    newArr[index] = {...newArr[index],hasWheel: !newArr[index].hasWheel}
    console.log(newArr);
    this.setState({hamsters:newArr});
  } 

  render() {
    return (
      <div>
        {/* Added the state we can refactor the code below: all must be between curly braces because we want to use jsx. We use .map(arg1, arg2) which is an iterator and will take two arguments: ham (for hamsters), and i (for index): it creates a react list. We are passing all those attributes where ham is each instance oh that object, each hamster*/}
        {
          this.state.hamsters.map((ham, i) => {
            return <HamstersLiftingState
              name={ham.name}
              color={ham.color}
              age={ham.age}
              hasWheel={ham.hasWheel}
              // we also need a key, that index (i): we get an error on the console because React needs a key: each child in a list should have a unique "key" prop, so React can know the difference between all of them: we use the index (i):
              key={i}
              // since key is a prop that we cannot pass but we want to pass an index: we pass idx 
              idx={i}
              // pass the handleWheel function
              handleWheel={this.handleWheel}
            />
          })
        }


        {/* Add Component with tag (in one line, or more clear like below) and add the props to this component with key:value pairs (similar to how it was in html) and remember that if we pass something it is not a string we need curly braces (flow of data) */}
        {/* <HamstersLiftingState
          name="Chuckles"
          color="Brown"
          age={2}
          // we can pass a boolean of course:
          hasWheel={true}
        />
        <HamstersLiftingState
          name="George"
          color="Light Grey"
          age={4}
          hasWheel={false}
        />
        <HamstersLiftingState
          name="Tickles"
          color="Blue"
          age={5}
          hasWheel={true}
        /> */}

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
