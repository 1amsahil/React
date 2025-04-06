import './App.css'
import UserContext from './context/UserContext'
import Home from './pages/Home/Home'
import { ToastContainer} from 'react-toastify';

function App() {

  return (
    <>
    <UserContext>
      <Home/>
      <ToastContainer/>
    </UserContext>
    </>
  )
}

export default App
