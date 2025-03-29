import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import {Header} from './components/Header';
import { DisplayCounter } from './components/DisplayCounter';
import Container from './components/Container';
import Controls from './components/Controls';

function App() {
  return<center>

    <Container>
      <div className="content">
        <Header></Header>
        <div>
          <DisplayCounter></DisplayCounter>
          <Controls/>
        </div>
      </div>
    </Container>

  </center>
}

export default App
