import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const notify = () => toast("Hey there!!");

  return (
    <div>
      <button onClick={notify}>Click me</button>
      <ToastContainer />
    </div>
  );
}
export default App