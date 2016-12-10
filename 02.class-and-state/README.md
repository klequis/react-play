
# React-Play.Class-and-State

**Author:** klequis

This React example project shows you how to use 'Class' components with 'state'.

## Component Hierarchy
- index.js
    - Home.jsx
        - Welcome
            - Message
            - CurrentDate
* Note: Home is not necessary but we in the example but it is there i preperation of putting additional components on the page.

## Class Component
Define a component with an ES6 class.

- Note that 'export default' is now part of the class declaration.
- The class must have a 'constructor' that takes 'props' as an argument.
- super(props) initializes the base/parent class
````js
export default class Clock extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      // JSX to render goes here
    );
  }
}
````
## Adding 'state'
- 'state' is a React object which you populate with properties to store data.
- 'state' goes inside the constructor
````js
export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first: "Karl",
      last: "Ecker",
  }
  render() {
    return (
      // JSX to render goes here
    );
  }
}
````
## Important Points
- You can only use state in a Class Component, not in a Functional Component.
