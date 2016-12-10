
# React-Play.06.Events-03

**Author:** klequis

This React example will show you how to use multiple events across multipe component.

## Component Hierarchy
- index.js
    - Home.jsx
        - Level01
            - Level02
                - Level03
        - OtherLevel01
            - OtherLevel02
* Note: Unlike 04.events-02, Home now has a purpose. It is a place to render both Level01 and OtherLevel01.

## Introduction
### About this project
Your React project may not have a large number of events. Given this example project's small size it has more events than would normally be expected, but then it is an example.
It is also unlikely that all your events will be in one parent and we will illustrate this using the component OtherLevel01.
### General comment on events in React
There are different ways to create events in react. This example shows you the method recommended by Facebook. 
Events follow a pattern. While the name of the event and what it does has a nearly ifinit number of possibilities, the implementation (syntax if you will) of the event is very consistent. As such, we will simply be repeating what was done in 04.events-02. You can think of this example as doing the same thing but in a more complex situation.

## Important Points
### Event Names
- React names differ from DOM names. For example the DOM event 'onclick' is 'onClick' in React and the DOM event 'ondblclick' is 'onDoubleClick' in React. Be sure to look-up the correct React event name [here](https://facebook.github.io/react/docs/events.html#supported-events).