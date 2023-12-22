import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/Aboutus';
import Contact from './components/Contact';
import Home from './components/Homepager';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
    
        </Router>
    </div>
  );
}

export default App;
