
function App() {
  const person = {
    name: "Himanshu",
    age: 25,
    occupation: "Software Developer"
  };

  return (
    <>
    person.map((data)=(
      <div key={data.name}>
        <h1>data.name</h1>
        <h1>data.age</h1>
        <h1>data.occupation</h1>
      </div>
    ))
    </>
  )
}

export default App
