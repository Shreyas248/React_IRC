import Nav from "./Components/Nav";
import About from "./Pages/About";
import Home from "./Pages/Home";
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
	<div className="App"> 
  <Nav/>
  <Routes>
    <Route path ='/'element={<Home/>}></Route>
    <Route path ='/'element={<About/>}></Route>
  </Routes>
	</div>
  );
}

export default App;
