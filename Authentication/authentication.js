
document.addEventListener("DOMContentLouded",(event)=>{


    const getUserInput = ()=>{

        let UserSignUpname = document.getElementById("UserSignUpname").value;
        console.log(UserSignUpname);
            let UserSignupname= document.getElementById("UserSignupname").value;
            let UserSignPassword= document.getElementById("UserSignPassword").value;
        
         return UserSignUpname;  
        }
document.querySelector("button").addEventListener("click",getUserInput)
    
});
