import './App.css';
import Place from './Place.js';
import Food from './Food.js';
import Home from './Home.js';
import './mainPage.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
function App() {
  return (
    <Router> 
      <Routes> 
        <Route exact path='/' exact element={<Home />} />
        <Route path='/travel' element={<Place/>} />
        <Route path='/cocktail' element={<Food/>} />
        </Routes>
     

    </Router>
   
  );
}

export default App;
