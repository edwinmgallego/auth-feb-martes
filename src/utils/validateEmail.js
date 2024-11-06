function validateEmail(valor,diverror){
    if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        valor)){
            diverror.innerHTML ="";
            return true;
        }else{
            diverror.innerHTML="*Email incorrecto"
            return false;
        }
}