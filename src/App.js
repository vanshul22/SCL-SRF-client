import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contactus from './Pages/Contactus';
import Login from './Pages/Login';
import Signup from './Pages/Contactus';
import Studentregisteration from './Pages/Studentregisteration';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/aboutus' element={< About />}></Route>
        <Route exact path='/contactus' element={< Contactus />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/signup' element={< Signup />}></Route>
        <Route exact path='/studentregisteration' element={< Studentregisteration />}></Route>
      </Routes>
    </Router>
  );
}

export default App;