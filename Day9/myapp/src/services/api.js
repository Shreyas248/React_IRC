import axios from 'axios'
const URL ='http://localhost:3000'

const getUser = () =>axios.get(`${URL}/users`)
const getUserId = (id) => axios.get(`${URL}/users/${id}`)
const addUser =(data)=> axios.post(`${URL}/users`,data)
const EditUser =(id,data)=> axios.post(`${URL}/users/${id}`,data)
const deleteUser =(id,data)=> axios.delete(`${URL}/users/${id}`,data)
export{
    getUser, 
    getUserId,
    addUser,
    EditUser,
    deleteUser
}