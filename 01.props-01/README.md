# React-Play.Props

**Author:** klequis

This example project shows you how to use 'props' and to create 'functional' components. The major two types of component in React are 'functional' and 'class' components.

## Components & Props
### Functional Component
A Functional Component is simply a JavaScript function. It is a 'component' because it accepts 'props' as an argument and returns JSX as a string.
````js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
````
#### Important Points
- React will always pass 'props' to your custom component
- Data flows down the hierarchy
- Props are read-only
