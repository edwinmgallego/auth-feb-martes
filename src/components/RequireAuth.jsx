import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Navigate } from 'react-router-dom'

const RequireAuth = () => {
    const {user} =useContext(UserContext)

    if(!user){
        return<Navigate to='/login'></Navigate>
    }
  return  Children; 
  
}

export default RequireAuth