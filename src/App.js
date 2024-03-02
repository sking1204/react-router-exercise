import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Cookies from './Cookies';
import Yogurt from './Yogurt';


function App() {
  return (
    <div className="App">
      <BrowserRouter>       
      <Routes>
        <Route path="/" element={<VendingMachine/>} />
        <Route path="/chips" element={<Chips/>} />
        <Route path="/cookies" element={<Cookies/>} />
        <Route path="/yogurt" element={<Yogurt/>} />
    
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
