   const form = document.querySelector('#form')
   const username = document.querySelector('#username')
   const email = document.querySelector('#email')
   const password = document.querySelector('#password')
   const cpassword = document.querySelector('#cpassword')


   form.addEventListener('submit',(e) =>{
        
        if(!validateInputs()){
            e.preventDefault();
        }
   })
 
   function validateInputs() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    let success = true

    if(usernameVal===''){
        success=false
        setError(username, 'username is required')
    }
    else{
        setSucess(username)
    }

     if(emailVal===''){
        success=false
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success=false
        setError(email,'please enter a valid email')
    }
    else{
        setSucess(email)
    }

    if(passwordVal === ''){
        success=false
        setError(password,'password is required')
    }
    else if(passwordVal.length<8){
        success=false
        setError(password,'password must be atleast 8 character')
    }
    else{
       setSucess(password)
    }

    if(cpasswordVal === ''){
        success=false
        setError(cpassword,'confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success=false
        setError(cpassword,'password does not match')
    }
    else{
        setSucess(cpassword)
    }

    return success;

   }

   function setError(element,message){
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error')

        errorElement.innerText = message;
        inputGroup.classList.add('error')
        inputGroup.classList.remove('sucees')
   }

   function setSucess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innertext = '';
    inputGroup.classList.add('sucess')
    inputGroup.classList.remove('error')
   }

   const validateEmail = (email) =>{
        return String(email)
            .toLowerCase
            .match(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            );
   };