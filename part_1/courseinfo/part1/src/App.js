
// Building Header Component
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
};

// Building Content Component
const Content = ({parts}) => {
  return (
    <div>
      <PartOne part1={parts[0].name} exercises1={parts[0].exercises} />
      <PartTwo part2={parts[1].name} exercises2={parts[1].exercises} />
      <PartThree part3={parts[2].name} exercises3={parts[2].exercises} />
    </div>
  );
};
// PartOne for Content Component
const PartOne = (props) => {
  return (
    <p>
      {props.part1} {props.exercises1}
    </p>
  );
}

// PartTwo for Content Component
const PartTwo = (props) => {
  return (
    <p>
      {props.part2} {props.exercises2}
    </p>
  );
}

// PartThree for Content Component
const PartThree = (props) => {
  return (
    <p>
      {props.part3} {props.exercises3}
    </p>
  );
}

// Building Total Component
const Total = (props) => {
  return (
    <div>
      <p>Number of Exercises: {props.exercisesTotal}</p>
    </div>
  );
}

// ** Building Application **
const App = () => {
  // Declaring Variables
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using Props to Pass Data',
        exercises: 7
      },
      {
        name: 'State of a Component',
        exercises: 14
      }
    ]
  }

  // Returning Single Div of
  // Returning Single Div of
  return (
    // Components + Passing Props
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercisesTotal={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App