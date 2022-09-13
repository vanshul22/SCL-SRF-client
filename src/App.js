import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contactus from './Pages/Contactus';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Studentregistration from './Pages/Studentregistration';


function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/aboutus' element={< About />}></Route>
        <Route exact path='/contactus' element={< Contactus />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/signup' element={< Signup />}></Route>
        <Route exact path='/studentregistration' element={< Studentregistration />}></Route>
      </Routes>
    </>
  );
}

export default App;