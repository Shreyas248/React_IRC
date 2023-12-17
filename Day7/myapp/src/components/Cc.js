
import React from 'react'
import { Component } from 'react'
import toast, { Toaster } from 'react-hot-toast';
//HOT TOAST
const notify = () => toast.success('Gear Equipped!🖊️',
{
    theme:"dark"
});
class Cc extends Component{
    render(){
        return(
            <>
<div>
      <button onClick={notify}>Equip Gear!</button>
      <Toaster />
    </div>
            </>
        )
    }
}
export default Cc