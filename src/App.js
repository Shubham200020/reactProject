
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './home';
import Login from './login';
import Maping from './Maping';

import Display from './display';

function App() {
  return (
    <div className="App">
    
      <Router>
      <nav>
      <Link to='/'>Home</Link> &nbsp;&nbsp;&nbsp;
      <Link to='/login'>Login</Link> &nbsp;&nbsp;&nbsp;
      <Link to='/map'>Map</Link> &nbsp;&nbsp;&nbsp;
      <Link to='/display'>Display</Link> &nbsp;&nbsp;&nbsp;
      </nav>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='login' Component={Login}></Route>
        <Route path='map' Component={Maping}></Route>
       <Route path='display' Component={Display}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
