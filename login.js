function submitFun() {
    const uname = f1.uname.value
    const pass = f1.pass.value
    
    const a = localStorage.getItem("name");
    const b = localStorage.getItem("password");

     


    //  if (uname === a  ) {
    //     sp1.innerHTML=""
    //     err.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`;
    //     return false;

        
        
    //  }
    
    // else if(pass === b){
    //     sp1.innerHTML=""
    //     err1.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`;
    //     return false;

       
    // }
    //  else 
    if (uname === a && pass === b) {
        sp.innerHTML=""
        sp1.innerHTML=""
        alert("Login successful!");
        return true;
        
    } else {
        //sp.innerHTML=("required username")
       // sp1.innerHTML=("required password")
       alert("Invalid username or password!");
        return false;
    }
}
