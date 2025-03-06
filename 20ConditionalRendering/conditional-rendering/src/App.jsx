function App() {

  let healthyFood = ['Daal','Roti','Salad','Ghee','Milk'];
  // let healthyFood = [];
  
  return (
    <>
        <h2>Health Foods</h2>
        {(healthyFood.length === 0 ? <h2>List is Empty</h2> : null )}
        
        <ul className='border'>
          {healthyFood.map(items => (<li key={items} className="list-group-item">{items}</li>))}
        </ul>
    </>
  )
}

export default App
