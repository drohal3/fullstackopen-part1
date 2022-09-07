# Fullstack Open - Part1: Introduction into React
Part 1 of the Full Stack online course https://fullstackopen.com/en/part1

## Exercise 1.1: course information, step1
**Task:**
The application that we will start working on in this exercise will be further developed in a few of the following exercises. In this and other upcoming exercise sets in this course, it is enough to only submit the final state of the application. If desired, you may also create a commit for each exercise of the series, but this is entirely optional.

Use create-react-app to initialize a new application. Modify index.js to match the following
```
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
and App.js to match the following
```
const App = () => {
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

return (
<div>
<h1>{course}</h1>
<p>
{part1} {exercises1}
</p>
<p>
{part2} {exercises2}
</p>
<p>
{part3} {exercises3}
</p>
<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
</div>
)
}
```
export default App
and remove extra files (App.css, App.test.js, index.css, logo.svg, setupTests.js, reportWebVitals.js)).

Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

Define the new components in file App.js.

The App component's body will approximately be as follows:
```
const App = () => {
// const-definitions

return (
<div>
<Header course={course} />
<Content ... />
<Total ... />
</div>
)
}
```
WARNING create-react-app automatically makes the project a git repository unless the application is created within an already existing repository. Most likely you do not want the project to become a repository, so run the command rm -rf .git in the root of the project.

**Solution:** 
The solution is demonstrated in the courseinfo application (courseinfo folder). See commits for more details.

## Exercise 1.2: course information, step2
**Task:**
Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three Part components of which each renders the name and number of exercises of one part.
```
const Content = ... {
return (
<div>
<Part .../>
<Part .../>
<Part .../>
</div>
)
}
```
Our application passes on information in quite a primitive way at the moment, since it is based on individual variables. This situation will improve soon.

**Solution:**
The solution is demonstrated in the courseinfo application (courseinfo folder). See commits for more details.

## Exercise 1.3: course information step3
**Task:**
Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it still works:
```
const App = () => {
const course = 'Half Stack application development'
const part1 = {
name: 'Fundamentals of React',
exercises: 10
}
const part2 = {
name: 'Using props to pass data',
exercises: 7
}
const part3 = {
name: 'State of a component',
exercises: 14
}

return (
<div>
...
</div>
)
}
```
**Solution:**
The solution is demonstrated in the courseinfo application (courseinfo folder). See commits for more details.

## 1.4: course information step4
**Task:**
And then place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:
```
const App = () => {
const course = 'Half Stack application development'
const parts = [
{
name: 'Fundamentals of React',
exercises: 10
},
{
name: 'Using props to pass data',
exercises: 7
},
{
name: 'State of a component',
exercises: 14
}
]

return (
<div>
...
</div>
)
}
```
NB at this point you can assume that there are always three items, so there is no need to go through the arrays using loops. We will come back to the topic of rendering components based on items in arrays with a more thorough exploration in the next part of the course.

However, do not pass different objects as separate props from the App component to the components Content and Total. Instead, pass them directly as an array:
```
const App = () => {
// const definitions

return (
<div>
<Header course={course} />
<Content parts={parts} />
<Total parts={parts} />
</div>
)
}
```
**Solution:**
The solution is demonstrated in the courseinfo application (courseinfo folder). See commits for more details.

## 1.5: course information step5
**Task:**
Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.
```
const App = () => {
const course = {
name: 'Half Stack application development',
parts: [
{
name: 'Fundamentals of React',
exercises: 10
},
{
name: 'Using props to pass data',
exercises: 7
},
{
name: 'State of a component',
exercises: 14
}
]
}

return (
<div>
...
</div>
)
}
```
**Solution:**
The solution is demonstrated in the courseinfo application (courseinfo folder). See commits for more details.

## Exercise 1.6: unicafe step1
**Task:**
Like most companies, Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. 

Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

It is advisable to use the same structure that is used in material and previous exercise. File index.js is as follows:
```
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
You can use the code below as a starting point for the App.js file:
```
import { useState } from 'react'

const App = () => {
// save clicks of each button to its own state
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

return (
<div>
code here
</div>
)
}

export default App
```
**Solution:**
The solution is demonstrated in the unicafe application (unicafe folder). See commits for more details.

## 1.7: unicafe step2
**Task:**
Expand your application so that it shows more statistics about the gathered feedback: 
the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) 
and the percentage of positive feedback.
**Solution:**
The solution is demonstrated in the unicafe application (unicafe folder). See commits for more details.

## 1.8: unicafe step3
**Task:**
Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

Remember that components should not be defined inside other components:
```
// a proper place to define a component
const Statistics = (props) => {
// ...
}

const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

// do not define a component within another component
const Statistics = (props) => {
// ...
}

return (
// ...
)
}
```
**Solution:**
The solution is demonstrated in the unicafe application (unicafe folder). See commits for more details.

## 1.9: unicafe step4
**Task:**
Change your application to display statistics only once feedback has been gathered.</br> 
**Solution:**
The solution is demonstrated in the unicafe application (unicafe folder). See commits for more details.

## 1.10: unicafe step5
**Task:**
Let's continue refactoring the application. Extract the following two components:

Button for defining the buttons used for submitting feedback
StatisticLine for displaying a single statistic, e.g. the average score.
To be clear: the StatisticLine component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:
```
const Statistics = (props) => {
/// ...
return(
<div>
<StatisticLine text="good" value ={...} />
<StatisticLine text="neutral" value ={...} />
<StatisticLine text="bad" value ={...} />
// ...
</div>
)
}
```
The application's state should still be kept in the root App component.<br/>
**Solution:**
The solution is demonstrated in the unicafe application (unicafe folder). See commits for more details.

## 1.11*: unicafe step6
**Task:**
Display the statistics in an HTML table<br/>
**Solution:**
The solution is demonstrated in the unicafe application (unicafe folder). See commits for more details.

## 1.12*: anecdotes step1
**Task:**
The world of software engineering is filled with anecdotes that distill timeless truths from our field into short one-liners.

Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering:
```
import { useState } from 'react'

const App = () => {
const anecdotes = [
'If it hurts, do it more often.',
'Adding manpower to a late software project makes it later!',
'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
'Premature optimization is the root of all evil.',
'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]

const [selected, setSelected] = useState(0)

return (
<div>
{anecdotes[selected]}
</div>
)
}

export default App
```
Content of the file index.js is same as in previous exercises.

Find out how to generate random numbers in JavaScript, eg. via search engine or on Mozilla Developer Network. Remember that you can test generating random numbers e.g. straight in the console of your browser.<br/>
**Solution:**
The solution is demonstrated in the anecdote application (anecdote folder). See commits for more details.
