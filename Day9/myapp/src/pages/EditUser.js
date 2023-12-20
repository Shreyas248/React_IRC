import { useNavigate,useParams } from "react-router-dom";
import { edituser, getuserid } from "../services/api";
import { useEffect,useState } from "react";

const Edituser =()=> {
const {id} =useParams();

const navigate = useNavigate()

  const[data,setData]=useState({
    username:'',
    password:''
  })
const fetchUser = async()=>
{
  try{
    const res =await getuserid(id)
  setData(res.data)
  }
  catch(e)
  {
    console.log(e)
  }
}


  const handleChange =(e)=>
  {
setData({...data,[e.target.id]:e.target.value})
  }
  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    try {
      const res2 = await edituser(id,data)
      console.log(res2.status)
      if(res2.status === 200)
      {
        alert('user updated')
        navigate('/')
      }
    } 
    catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>
  {
    fetchUser();
  },[])

    return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={data.username} id='username' placeholder="username" onChange={handleChange}/>
      <input type="text" id='password' value={data.password} placeholder="password"onChange={handleChange}/>
      <button type="Submit" className="submit-btn">Save</button>
    </form>
    );
  }
  
  export default Edituser;