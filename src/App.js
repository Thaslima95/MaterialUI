import logo from './logo.svg';
import './App.css';
import ButtonComponents from './Components/ButtonComponents';
import InputComponents from './Components/InputComponents';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ButtonComponents/>}/>
    <Route path="/input" element={<InputComponents/>}/>
    
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
