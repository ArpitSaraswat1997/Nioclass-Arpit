// import logo from './logo.svg';
import './App.css';
import Math from './components/Math';
import Solution from './components/Solution';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import Math2 from './components/Math2';
import Math3 from './components/Math3';

function App() {
  return (
   <div>
    <Header/>
    <Routes>
      <Route path='/' element={ <Math/>}/>
      <Route path='/que2' element={ <Math2/>}/>
      <Route path='/que3' element={ <Math3/>}/>
    </Routes>
   
    <Solution/>
   </div>
  );
}

export default App;
