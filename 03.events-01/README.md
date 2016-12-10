
# React-Play.Events-01

**Author:** klequis

This React example project shows you how to use events. In it, only one event is created. A later example project will illustrate using multiple events.

## Component Hierarchy
- index.js
    - Home.jsx
        - Welcome
            - Message
            - CurrentDate
* Note: Home is not necessary but it is there as preperation of putting additional components on the page.

## Events
Each point below relates to a comment in the code.
- (A) You must bind the event handler to the class. This is done inside the constructor.
- (B) Event handlers are functions created inside a component class.

## Important Points
- (C) When you change state do not do it directly. Use the React setState() function.
- (D) React has an object named 'prevState'. It represents the state before you make a change. 
- Using setState with prevState, 
    - React will merge the current change into existing state rather than updating the entire state. 
    - As a result, only the relevant parts of state are changed and only the parts of the UI related to that change are updated. On a large application, this improves performance.