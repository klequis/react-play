# React-Play.Props-02

**Author:** klequis

This example project will show how to implement 'PropTypes' & 'defaultProps'.

**Note:** All explanations are in code comments. See the code.

## What are they?
### defaultProps
'defaultProps' are used to ensure that props will have a value even if the owning component didn't specify one.

### propTypes
propTypes checks if the value of a property passed in is of the correct type. For example, if you have a 'firstName' prop that should be a string but a number is passed as the value for firstName, the propTypes check will write an error to the JavaScript console.

- propTypes are only checked in development mode. 
- When an invalid condition is found an error is written to the JavaScript console. No error is raised nor is the code execution interrupted in any way.
- Errors, i.e., miss-matched types, are only shown in the JavaScript console.

## Producing the Errors
### Prop passed in is of wrong type
- In Home.jsx, change 'age: 23' to 'age:"twenty three"'
- Check the console for the error message
- Undo the above changes

### Prop is not passed in
- Undo the changes made for the previous example
- In Home.jsx, on line 29, delete 'age={this.state.age}'
- In Welcome01.jsx, comment out line 42 which is "age:0"
    - If a required property has a default specified it will not be flagged as required and no error will be written to the console.
- Check the console for the error message
- Undo the above changes