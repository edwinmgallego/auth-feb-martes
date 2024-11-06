export const erroresFirebase =(code)=>{
    switch(code){
        case"auth/email-already-in-use":
         return "el usuario ya esta registrado"
        case "auth/invalid-email":
         return"Formato de email no valido"
        case "auth/user-not-found":
         return "usuario no encontrado"
        case "auth/wrong-password":
        return "contraseña incorrecta"
        default:
            return "ocurrio un error en el server"
    }
};