import {Routes, Route} from 'react-router-dom'
import User from './pages/User';
import { AddUser } from './pages/AddUser';
import { EditUser } from './pages/EditUser';
const App =()=> {
  return (
    <div>
      <Routes>
      <Route path='/' element={<User/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/' element={<EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
