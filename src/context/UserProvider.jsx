import React,{useEffect,useState} from 'react'
import { createContext } from 'react'
import PropTypes from 'prop-types'
import{createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth'
import { auth } from '../firebase/firebase'

export const UserContext = createContext();
const UserProvider = (props) => {

    const [user,setUser] = useState(false)
//registro con firebase
const registerUser=(email,password)=>{
    createUserWithEmailAndPassword(auth,email,password)
}
//login
const loginUser=(email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
}
const sigOutUser= ()=>{
    signOut(auth);
}
//mantenemos a nuestro usuario  presente en el sitio

useEffect(()=>{
    const unsuscribe= onAuthStateChanged(auth,(user)=>{
        console.log(user);
        if(user){
            const {email,photoUrl,displayName,uid}=user;
            setUser({email,photoUrl,displayName,uid})
        }else{
            setUser(null)
        }
    })
    return ()=> unsuscribe();
},[])
  return (
    <UserContext.provider value={{email,photoUrl,displayName,uid}}>
        {props.children}
    </UserContext.provider>
  )
}
//validacion de los props

UserProvider.propTypes= {
    children: PropTypes.node.isRequired
};

export default UserProvider