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
import SwitchComponent from './Components/SwitchComponent';
import AutoCompleteComponent from './Components/AutoCompleteComponent';
import FloatingActionComponent from './Components/FloatingActionComponent';
import ButtonGroupComponent from './Components/ButtonGroupComponent';
import SelectComponent from './Components/SelectComponent';
import TextFieldComponent from './Components/TextFieldComponent';
import ToggleButtonComponent from './Components/ToggleButtonComponent';
import RangeSlider from './Components/RangeSlider';
import RequiredCheckboxComponent from './Components/RequiredCheckboxComponent';
import ColorCheckbox from './Components/ColorCheckbox';
import IconCheckbocXomponent from './Components/IconCheckbocXomponent';
import NativeSelectComponent from './Components/NativeSelectComponent';
import GroupAutoComplete from './Components/GroupAutoComplete';
import StyledButtonComponent from './Components/StyledButtonComponent';
import ResponsiveGrid from './Components/ResponsiveGrid';
import PaperComponent from './Components/PaperComponent';
import GridPractice from './Components/GridPractice';



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
    <Route path="/switch" element={<SwitchComponent/>}/>
    <Route path="/autocomplete" element={<AutoCompleteComponent/>}/>
    <Route path="/floating" element={<FloatingActionComponent/>}/>
    <Route path="/buttongrp" element={<ButtonGroupComponent/>}/>
    <Route path="/select" element={<SelectComponent/>}/>
    <Route path="/text" element={<TextFieldComponent/>}/>
    <Route path="/toggle" element={<ToggleButtonComponent/>}/>
     <Route path="/rangeslider" element={<RangeSlider/>}/>
     <Route path="/requiredCheckbox" element={<RequiredCheckboxComponent/>}/>
    <Route path="/colorCheckbox" element={<ColorCheckbox/>}/>
    <Route path="/icon" element={<IconCheckbocXomponent/>}/>
    <Route path="/nativeselect" element={<NativeSelectComponent/>}/>
    <Route path="/group" element={<GroupAutoComplete/>}/>
    <Route path="/styledbutton" element={<StyledButtonComponent/>}/>
    <Route path="/responsivegrid" element={<ResponsiveGrid/>}/>
    <Route path="/paper" element={<PaperComponent/>}/>
    <Route path="/gridpractice" element={<GridPractice/>}/>

    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
