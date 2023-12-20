import axios from 'axios'

const URL ='http://localhost:3000'

const getuser =()=> axios.get(`${URL}/users`)

const getuserid =(id)=> axios.get(`${URL}/users/${id}`)

const adduser =(data)=>axios.post(`${URL}/users,data`)

const edituser =(id,data)=> axios.put(`${URL}/users/${id}data`)

const deleteuser =(id)=> axios.delete(`${URL}/users/${id}`)

export{getuser,getuserid,adduser,edituser,deleteuser}