import React from 'react'
import { useParams } from 'react-router-dom'

export const EditUser = () => {
  const (id) = useParams()
  console.id(log)
  return (
    <div>
        <form>
            <input type='text' id='username' placeholder='username'/>
            <input type='password' id='password' placeholder='password'/>
            <button type='submit' className='submit-btn'>Save</button>
        </form>
    </div>
  )
}
