import React ,{useContext,useState}from 'react'
import{UserContext} from '../context/UserProvider'
import {useForm} from 'react-hook-form'
import{useNavigate} from 'react-router-dom'

import {erroresFirebase} from "../utils/erroresFirebase"
import{ formValidate} from "../utils/formValidate"
import FormError from "../components/FormError"
import FormInput from "../components/FormInput"

const Register = () => 
{
    //const [email,setEmail]= useState("")
    //const [password,setPasword] =useState("")
    const navegate = useNavigate();
    const {registerUser }=useContext(UserContext)
    const {required, patternEmail, minLength, validateTrim, validateEquals}= formValidate();
    const {register, handleSubmit,formState:{errors}, getValues ,setError,}=useForm({
        defaultValues:{
            email: "EMPW1@uao.edu.co",
            password:"a1234567890",
            repassword:"a1234567890"
        }
    });
    /*const handleSubmit = async(e)=>{
        e.preventdefault();
        console.log("enviando datos-->", email, password)
        
            
        }
    }*/

    const onSubmit= async({email,password})=>{
        try {
            await registerUser(email,password)
                navegate("/");
       
        } catch (error) {
            setError("firebase",{
                message: erroresFirebase(error.code)
            })
            console.log(error.code);

    }
  return (
    <>
    <div>
        <h1>Register</h1>
        <FormError error={errors.firebase}/>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
             type="email"
             placeholder='email' 
             value={email} 
             {...register("email",{
            required,
            pattern: patternEmail,    
            })}>
                
            <FormError error={errors.email} />

            </FormInput>
            
            <FormInput type="password"   placeholder='pasword' value={password} {...register("password",{
                minLength,
                validate:validateTrim,
            })}>
                <FormError error={errors.password}/>
                  </FormInput>
           
                <FormInput type="repassword"   placeholder='pasword' value={password} {...register("repassword",{
                minLength,
                validate: validateEquals(getValues),
            })}>

               <FormError error={errors.repassword}/>

            </FormInput>
          
           


            <button type="submit">registrarse</button>
        </form>
    </div>
    </>
    
  )
}}

export default Register