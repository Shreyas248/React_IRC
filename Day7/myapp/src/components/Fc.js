
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//TOASTIFY
 const Fc=()=>{
  const notify = () => toast.error("Lakes are not for swimming🤽",{
  theme:"dark",
}
  );
  const notify1= () => toast.error("Beware of Bears!❌🐻",
  {
    theme:"dark",
  });

    return (
      <div>
        
        <button  onClick={notify}>Major Rules to follow</button>
        <button  onClick={notify1}>Don't feed wild animals                                                                                                                     
         </button>
        <ToastContainer />
      </div>
    );
}
export default Fc
