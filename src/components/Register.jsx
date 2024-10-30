import React ,{useContext,useState}from 'react'
import{UserContext} from '../context/UserProvider'

const Register = () => 
{
    const [email,setEmail]= useState("")
    const [password,setPasword] =useState("")
    const {registerUser }=useContext(UserContext)

    const handleSubmit = async(e)=>{
        e.preventdefault();
        console.log("enviando datos-->", email, password)
        try {
            await registerUser(email,password)
        } catch (error) {
            console.log(error.code);
            
        }
    }
  return (
    <>
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="email"  placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password"   placeholder='pasword' value={password} onChange={(e)=>setPasword(e.target.value)}/>
            <button type="submit"></button>
        </form>
    </div>
    </>
    
  )
}

export default Register