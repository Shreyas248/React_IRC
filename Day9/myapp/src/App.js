import { Routes, Route } from "react-router-dom";
import User from './pages/User'
import Edituser from './pages/EditUser'
import Adduser from './pages/AddUser'
import './assets/css/core.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<Edituser />} />
      </Routes>
    </>
  );
}

export default App;