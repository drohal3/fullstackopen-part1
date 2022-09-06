const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <>
            <p>
                {props.parts[0].name} {props.parts[0].exercises}
            </p>
            <p>
                {props.parts[1].name} {props.parts[1].exercises}
            </p>
            <p>
                {props.parts[2].name} {props.parts[2].exercises}
            </p>
        </>
    )
}

const Total = () => {
    
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
    
    let parts = [
        {name: part1, exercises: exercises1},
        {name: part2, exercises: exercises2},
        {name: part3, exercises: exercises3},
    ]
  return (
      <div>
        <Header course={course}/>
          <Content parts = {parts}/>
        
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
  )
}

export default App