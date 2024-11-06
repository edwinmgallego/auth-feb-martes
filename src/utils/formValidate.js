export const formValidate=(getvalues)=>{
    return{
        required:{
            value:true,
            message:"campo obligatorio",
        },
        patternEmail:{
            value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            message:"formato de  Email Incorrecto",
        },
        minLength:{
            value:6,
            message: "minimo 6 caracteres",
        },
        validateTrim:{
            trim: (v)=>{
                if(!v.trim)
                {
                    return"escribe algo 😒"

                }
                return true;

            },

            validateEquals(getvalues){
                return{
                    equals: (v)=> v===getvalues("password")||"no coincide las contraseñas"
                }
            }
        }
    }

}