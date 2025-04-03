import './App.css'
import UserContext from './context/UserContext'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
    <UserContext>
      <Home/>
    </UserContext>
    </>
  )
}

export default App
