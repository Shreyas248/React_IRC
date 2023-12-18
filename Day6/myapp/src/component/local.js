mport React from 'react'
import { useState } from 'react'
import '../component/local.css'

const Local=()=>{
    const[visible,setVisible]=useState(true);


const toggle =()=>
{
    setVisible(!visible)
}

// setTimeout(()=>{
//     setVisible(false)
// },5000)
return(
    <>
    {
        visible?(
            <div className='Card-wrapper'>
                <div className='Card'>
                    <p className='cookieHead'>Heyy!!</p>
                    <p className='cookiedesc'>Your Coupon Code : XYZ</p>
                    <div className='buttoncont'>
                        <button className='accept' onClick={toggle}>Allow</button>
                        <button className='decline' onClick={toggle}>Decline</button>
                    </div>
                </div>
            </div>
            
        ):(
            <div className='btn'>
            <button  className='new' onClick={toggle}>
                <h2>Welcome</h2>
            </button>
            </div>
            
        )
    }
    </>
   
)
}

export default Local