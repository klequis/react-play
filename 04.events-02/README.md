
# React-Play.Events-02

**Author:** klequis

This React example project demonstrates how to pass state and events down the hierarchial tree several levels.

## Component Hierarchy
- index.js
    - Home.jsx
        - Level01
            - Level02
                - Level03
* Note: Home is not necessary but it is there as preperation of putting additional components on the page.

## Passing Props
- Home.jsx: 
    - (A) State is passed to the child as a property named 'displayText'. It is not necessary to pass displayText. onChange could be passed by itself.
- Level01.jsx
    - (B) The property 'displayText' is passed to the child.
- Level02.jsx
    - (C) And again, the property 'displayText' is passed to the child.
## Creating & Passing Events
- Home.jsx
    - (D) The event is bound inside of the constructor.
    - (F) The textChange event is passed to the child as a property named 'onChange'. We use this name because it instructs React to create an event in the DOM named 'onchange' which is what you would do if writing the HTML by hand.
- Level01.jsx
    - (G) Note that the name 'textChange' is no longer here. It was passed in as a property named 'onChange', so onChange is textChange
- Level02.jsx
    - (H) Again, onChange is passed to the child.
- Level03.jsx
    - (I) The onChange property is used in the input element. React will create an 'onchange' event in the DOM. Use your DOM inspector to see it.

## Important Points
- To create an event on the DOM use the same name you would us if writing the HTML by hand, but use camel case instead of lower case. For example, the DOM event in HTML 'onchange' is 'onChange' in React.
