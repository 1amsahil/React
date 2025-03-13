import Container from "./components/Container"

function App() {

  return (
    <>
      <Container>
        <h2>This is passed from App.jsx</h2>
        <h2>And</h2>
        {/* We are passing <h2> tag to Container.jsx And In Conatiner.jsx, It stores in props.children*/}
      </Container>
    </>
  )
}

export default App
