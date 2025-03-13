import CarList from "./components/CarList"

function App() {
let car = ['BMW','Volvo','Mercedes','Tata','Mahindra']
  
return (
    <>
    <h2>Cars :- </h2>
    <CarList car ={car} />
    </>
  )
}

export default App
