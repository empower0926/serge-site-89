//mport logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import SapianCapital from './SapianCapital';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/sapian-capital' element={<SapianCapital/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
