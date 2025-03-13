import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{

  let healthyFood = ['Daal','Roti','Salad','Ghee','Milk']

  return <>
      <h2>Health Foods</h2>
      <ul className='border'>
        {healthyFood.map( items => (<li key={items} className="list-group-item">{items}</li>) )}
      </ul>
  </>
}

export default App;