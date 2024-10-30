import React,{useContext,useState} from 'react'
import{UserContext} from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]= useState("")
    const [password,setPasword] =useState("")
    const {loginUser }=useContext(UserContext)
    const navegate =useNavigate();

    const handleSubmitLogin= async(e)=>{
        e.preventDefault();
        try {
            
            await loginUser(email,password)
            console.log("usuario loegueado-->🤞👌")
        } catch (error) {
            console.log(error.code);
            
        }
    }
  return (
    <>
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmitLogin}>
            <input type="email"  placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password"   placeholder='pasword' value={password} onChange={(e)=>setPasword(e.target.value)}/>
            <button type="submit"></button>
        </form>
    </div>
    </>
  )
}

export default Login