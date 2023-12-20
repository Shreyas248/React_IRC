import React from 'react'
import "../assets/css/core.css"
import { useState } from 'react'
import { addUser } from '../services/api'
import { useNavigate } from 'react-router-dom'
 const AddUser = () => {
  const navigate = useNavigate()
  const[data,setData] = useState({
    username:'',
    password:''
  })
  const handleChange=(e)=>{
    setData({...data, [e.targer.id]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res = await addUser(data)
      if(res.status==201){
        alert('user added')
      }
    }
    catch(e){

      console.log(e)
    }
  }
  return (
    <div>
        <form>
            <input type='text' id='username' placeholder='username'onChange={handleChange}/>
            <input type='password' id='password' placeholder='password'onChange={handleChange}/>
            <button type='submit' className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}
export default AddUser