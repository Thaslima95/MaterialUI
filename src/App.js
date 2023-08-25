import logo from './logo.svg';
import './App.css';
import ButtonComponents from './Components/ButtonComponents';
import InputComponents from './Components/InputComponents';
import RatingComponent from './Components/RatingComponent';
import BadgeComponent from './Components/BadgeComponent';
import ColorButton from './Components/ColorButton';
import DialogeComponent from './Components/DialogeComponent';
import SliderComponent from './Components/Slider';
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
    <Route path="/badge" element={<BadgeComponent/>}/>
    <Route path="/colorbutton" element={<ColorButton/>}/>
    <Route path="/dialoge" element={<DialogeComponent/>}/>
    <Route path="/slider" element={<SliderComponent/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
