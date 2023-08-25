import logo from './logo.svg';
import './App.css';
import ButtonComponents from './Components/ButtonComponents';
import InputComponents from './Components/InputComponents';
import RatingComponent from './Components/RatingComponent';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ButtonComponents/>}/>
    <Route path="/input" element={<InputComponents/>}/>
    <Route path="/rating" element={<RatingComponent/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
