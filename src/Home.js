import './App.css';
import Place from './Place.js';
import Food from './Food.js';
import { Link } from 'react-router-dom';
import './mainPage.css';
function App() {
  return (
    <div className='mainpage'>
    <h1>
    <span>S</span>
    <span>U</span>
    <span>M</span>
    <span>M</span>
    <span>E</span>
    <span>R</span>
    <span> </span>
    <span>T</span>
    <span>I</span>
    <span>M</span>
    <span>E</span>
    <span>!</span>
    <br/>
    <form  className="home_btn"><Link to="/travel"> <button type="submit" className="button-53" > Let's Travel! </button></Link></form>
    <form className="home_btn2"><Link to="/cocktail"><button type="submit" className="button-532"> Make a Cocktail! </button></Link></form>
    </h1>
    <br/>
   
      
    
              
  </div>
   
  );
}

export default App;