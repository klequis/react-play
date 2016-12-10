# React-Play Lesson-01 Prop, Components & State

## Get the code
```
$ git clone https://github.com/trivalleycoders-org/react-play.git
```
* Navigate to your react-play directory and delete the .git directory so you can not accidentally push back to its repository.
* You can fork it if you are up to that


## Steps
1. Copy the react-lesson.template directory to a directory outside of /react-play. Rename the directory to something like 'lesson-01'. Then open this new folder in you code editor.
2. Open the /react-play folder in another instance of your editor so that it is ready to refer to.
3. In index.js
    1. import React
    2. import ReactDOM
4. Create Home.jsx as a class component
    1. import React
    2. Create 'state' with 2 properties, 'first' & 'last', and give them default values of your first and last name.
5. Create Name.jsx as a functional component
    1. Return a 'h1' element with the text "Hello 'first' 'last." using the props for first and last.
6. Render Name in Home passing it 'first' and 'last' as props.
7. Render Home in index.js and attach it to the 'app' div in index.html
8. Test your application. From the project root directory.
    1. $ npm install
    2. $ npm start
### Troubleshooting
- If you app does not display properly, first look in terminal for an error message during build. If there are none there, open the browsers developer tools and look for errors in the console.


## Process (recommended)
** Don't copy the example code in a way that gets ahead of the steps. You will learn less if you do. **
s** Type the code, don't copy. You will learn more that way **

1. Read all the Steps
2. Review example projects 01 & 02
3. Hide the example code
4. Attempt the first step
5. Look at the to find the answer as often as needed
6. Go to #3 and repeat for the next step.

## Hints
a. All components are created in /app/components
b. index.js and index.html are already in the template project (react-play.template).
c. A 'functional component' returns the result of a function and a 'class component' is a JavaScript class. There are examples of each in the example projects
d. State is passed to children via props (aka properties)

https://github.com/trivalleycoders-org/react-play.git

