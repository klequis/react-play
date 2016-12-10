/* (D)
 * You must specify {PropTypes} when importing react or each time you use
 * 'PropTypes' you will need to type 'React.PropTypes'.
*/
import React, {PropTypes} from 'react';


const Welcome01 = function welcome(props) {
  return (
    <div>
      <h1>Welcome01.jsx</h1>
      <h2>Hello {props.first} {props.last} from {props.state}</h2>
      <p>You wish you were {props.age} years old.</p>
    </div>
  )
}

/* (E)
 * For each property the component expects you specify the type.
 * Below, 'string' is specified for first, last & state. 'number is specified
 * for age.
 * 'isRequired' specifies the property is not optional which means it must
 * passed in or an error will be written to the console.
*/
// (F) Notice that in 'Welcome01.propTypes', 'propTypes' is camel case but
// for each property it is proper case: 'PropTypes'. It is easy to get
// this mixed-up
Welcome01.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

/* (G)
 * Here we give each expected property a default value
*/
Welcome01.defaultProps = {
  first: "No first",
  last: "No last",
  state: "No state",
  age: 0,
}

// Remember to export the component
export default Welcome01;
