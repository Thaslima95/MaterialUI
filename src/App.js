import logo from './logo.svg';
import './App.css';
import ButtonComponents from './Components/ButtonComponents';
import InputComponents from './Components/InputComponents';
import RatingComponent from './Components/RatingComponent';
import BadgeComponent from './Components/BadgeComponent';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


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
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
