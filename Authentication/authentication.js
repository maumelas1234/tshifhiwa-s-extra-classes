



    function getUserInput (name,email,password){

       name= document.getElementById("UserSignUpname").value;
           email= document.getElementById("userSignupEmail").value;
           password= document.getElementById("password").value;
            const UserInforArry= [{
            name: name,
            email:email,
            password:password
        }]
if (email && email.lengh >10 && name && password  &&  email.substring(email.length - 10)=="@gmail.com" ){
    if(!email.includes("@gmail.com") || !email.includes("@outlook.com")){
 
    let username = email.replace("@gmail.com",'')
            
    alert('data cepterd')

    }else {

        alert('invalid email or password')
    }
   


}else {

    alert("missing vales pless fiil in the missing text box")
}


console.log(UserInforArry);
console.log("khetzo wordla");

         return UserSignUpname;  
        }
    
    
