import React from 'react'

//Header component
const Header = (props)=>{
  return (
    <h1>{props.course}</h1>
  )
}

//Content component
const Content = (props)=>{
  return (
    <div>
      {props.ccc} {props.eee}
    <Part  part={props.ccc[0]} exercise={props.eee[0]}/>
    <Part  part={props.ccc[1]} exercise={props.eee[1]}/>
    <Part  part={props.ccc[2]} exercise={props.eee[2]}/>
    </div>
  )
}


//part component
const Part = (props)=>{
  return (
    <p>{props.part} {props.exercise}</p>
  )

}



//Total component
const Total = (props)=>{
  return (
    <p>Number of exercises {props.total}</p>
  )
}
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
      <Header course={course} />
      <Content ccc={[part1,part2,part3]} eee={[exercises1, exercises2,exercises3]}/>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}


export default App