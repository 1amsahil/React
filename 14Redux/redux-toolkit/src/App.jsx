import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import {Header} from './components/Header';
import { DisplayCounter } from './components/DisplayCounter';
import DisplayPrivacy from './components/DisplayPrivacy';
import Container from './components/Container';
import Controls from './components/Controls';
import { useSelector } from 'react-redux';

function App() {

  const privacy = useSelector((store) => store.privacy)

  return<center>

    <Container>
      <div className="content">
        <Header></Header>
        <div>
          {privacy ? <DisplayPrivacy/> : <DisplayCounter/>}
          <Controls/>
        </div>
      </div>
    </Container>

  </center>
}

export default App
