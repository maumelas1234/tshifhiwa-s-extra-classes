
    function getUserInput ( ConfirmPassword,email,password,name){

           email= document.getElementById("userSignupEmail").value;
           password= document.getElementById("password").value;
           ConfirmPassword= document.getElementById("ConfirmPassword").value;

            const userInforArry= [{
          name:name,
            email:email,
            password:password,
            ConfirmPassword: ConfirmPassword,
        }]
      

if (email && email.lengh >10 && password && ConfirmPassword){
  
    alert("passwcfgh ")

       // let name = email.replace("@gmail.com",'')

const userObject =  userInforArry.find(item=> item.email == email)
     



        }else if(email.substring(email.length - 10) !="@gmail.com" ){
            alert("bed for met for email")
 
        }
        
        
        else  if ( !email || !password ||  !ConfirmPassword){

alert("password doesnot match ")

        }
        else if  (password !=ConfirmPassword)
       {

            alert("missing input ditected ")
 
        }else if ( email.lengh <10){

            alert("email is incorrect")
        }
// // Example to send data to the server
// const createUser = async () => {
//     const response = await fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email: 'example@example.com', name: 'John Doe' })
//     });
//     const data = await response.json();
//     console.log('User created:', data);
//   };

//   // Example to get data from the server
//   const getUser = async () => {
//     const response = await fetch('http://localhost:3000/users/example@example.com');
//     const data = await response.json();
//     console.log('User data:', data);
//   };

//   // Call functions
//   createUser();
//   getUser();







      return { ConfirmPassword,email,password};  
    }
