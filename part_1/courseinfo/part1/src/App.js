
// Building Header Component
const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	);
};

const PartOne = (props) => {
	return (
		<p>
        {props.part1} {props.exercises1}
    </p>
	);
}

const PartTwo = (props) => {
	return (
		<p>
        {props.part2} {props.exercises2}
    </p>
	);
}

const PartThree = (props) => {
	return (
		<p>
        {props.part3} {props.exercises3}
    </p>
	);
}

// Building Content Component
const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

	return (
		<div>
			<PartOne part1={part1} exercises1={exercises1} />
      <PartTwo part2={part2} exercises2={exercises2} />
	    <PartThree part3={part3} exercises3={exercises3} />
		</div>
	);
};

// Building Total Component
const Total = (props) => {
	return (
		<div>
			<p>Number of Exercises: {props.exercisesTotal}</p>
		</div>
	);
}

// Building Application
const App = () => {
  // Declaring Variables
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  // Returning Single Value of
  return (
		// Components + Passing Props
    <div>
      <Header course={course} />
      <Content  />
      <Total exercisesTotal={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App