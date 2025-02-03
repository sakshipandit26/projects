function bfunU() {
    let pattern = /^([A-Z]{1,1})+([a-z]{3,7})$/

    let uname = f1.uname.value

    if (uname.match(pattern)) {
        err.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`
        sp.innerHTML = ""
        f1.uname.style.borderColor = "green";


    }
    else {
        f1.uname.style.borderColor = "red";
        sp.innerHTML = "Username is invalid. Please start with an uppercase letter followed by 3-7 lowercase letters.";
        err.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`
        f1.uname.value = ""
        f1.uname.focus()
   

    }

}
//email addresss 
function Emailfun() {
    let pattern = /^([a-z]{1,1})+([a-z0-9]{0,9})+([._]{0,1})([a-z0-9]{1,19})+([@]{1,1})([a-z]{2,19})+([.]{1,1})(com|co.in|in|usa|fr)$/;


    let email = f1.email.value

    if (email.match(pattern)) {
        erre.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`
        spemail.innerHTML = ""
        f1.email.style.borderColor = "green";


    }
    else {
        spemail.innerHTML = "email address is invalid...please try again"
        erre.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`
        f1.email.style.borderColor = "red";
        f1.email.value = ""
        f1.email.focus()
    }

}

//mobile validation

function Mobilefun() {
    let pattern = /^([6-9][0-9]{9})$/

    let mno = f1.mno.value

    if (mno.match(pattern)) {
        errno.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`
        spno.innerHTML = ""
         f1.mno.style.borderColor = "green";


    }
    else {
        spno.innerHTML = "Mobile number is invalid...please try again"
        errno.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`
        f1.mno.style.borderColor = "red";
        f1.mno.value = ""
        f1.mno.focus()

    }
}






function bfunP() {
    let pattern = /(^[a-zA-Z0-9@#$%&*]{2,9})+([@#$%&*]{1,1})+([a-zA-Z0-9@#$%&*]{3,10})$/
    let pass = f1.pass.value

    if (pass.match(pattern)) {
        err1.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`
        sp1.innerHTML = ""
        f1.pass.style.borderColor = "green";


    }
    else {
        sp1.innerHTML = `<h3 style='color:black'>PASSWORD MUST CONTAIN: </h3> 
        <ul><li>At least one lowercase letter </li>
            <li>At least one Uppercase letter </li>
            <li>At least one number </li>
            <li>At least one special symbol </li>
            <li>Minimum 8 Characters</li></ul>`
        err1.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`
        f1.pass.style.borderColor = "red";

        f1.pass.value = ""
        f1.pass.focus()


    }

}
//confirm password 
function bfunC() {
    let password = f1.pass.value
    let cpass = f1.cpass.value
    if (cpass === password) {
        err2.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`
        sp2.innerHTML = ""
        f1.cpass.style.borderColor = "green";


    }
    else {
        sp2.innerHTML = "Password and Confirm password should be match"
        err2.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`
        f1.cpass.style.borderColor = "red";
        f1.cpass.value = ""
        f1.cpass.focus()


    }
}

//date of birth

function DOBfun()
{
    let DOB=f1.dob.value
    if(DOB)
    {
        errDOB.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`
         spno.innerHTML = ""
        f1.dob.style.borderColor = "green";

    } else {
        f1.dob.style.borderColor = "red";
        errDOB.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`
        spDOB.innerHTML = "Date of Birth is required.";
        f1.DOB.value = ""
        f1.DOB.focus()
    }

}
//select cities

function cityfun()
{
    let city=f1.city.value
    if(city)
    {
        errcity.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`
        spcity.innerHTML = ""
       f1.city.style.borderColor = "green";

   } else {
       f1.city.style.borderColor = "red";
       errcity.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`
       spcity.innerHTML = "city is required.";
       f1.city.value = ""
       f1.city.focus()
   }

}























function submitFun1() 
{
    //username validation
    let pattern = /^([A-Z]{1,1})+([a-z]{3,7})$/
    let uname = f1.uname.value
    if (uname == "") {
        sp.innerHTML = "Username is required"
        return false
    }

    else if (!uname.match(pattern)) {
        sp.innerHTML = "UserName is invalid...please try again"
        err.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`
        f1.uname.value = "";
        f1.uname.focus()
        return false
    }

    else {
        err.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`
        sp.innerHTML = "";
    }


    
    // Email validation
    let pattern3 = /^([a-z]{1,1})+([a-z0-9]{0,9})+([._]{0,1})([a-z0-9]{1,19})+([@]{1,1})([a-z]{2,19})+([.]{1,1})(com|co.in|in|usa|fr)$/;
    let email = f1.email.value;
    if (email === "") {
        spemail.innerHTML = "Email address is required";
        return false;
    } else if (!email.match(pattern3)) {
        spemail.innerHTML = "Email address is invalid...please try again";
        erre.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`;
        f1.email.value = "";
        f1.email.focus();
        return false;
    } else {
        erre.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`;
        spemail.innerHTML = "";
    }



// Password validation
let pattern4 = /(^[a-zA-Z0-9@#$%&*]{2,9})+([@#$%&*]{1,1})+([a-zA-Z0-9@#$%&*]{3,10})$/;
let pass = f1.pass.value;
if (pass === "") {
    sp1.innerHTML = "Password is required";
    return false;
} else if (!pass.match(pattern4)) {
    sp1.innerHTML = `<h3 style='color:black'>PASSWORD MUST CONTAIN: </h3> 
    <ul><li>At least one lowercase letter </li>
        <li>At least one Uppercase letter </li>
        <li>At least one number </li>
        <li>At least one special symbol </li>
        <li>Minimum 8 Characters</li></ul>`
    err1.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`;
    f1.pass.value = "";
    f1.pass.focus();
    return false;
} else {
    err1.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`;
    sp1.innerHTML = "";
}



// Confirm password validation
let cpass = f1.cpass.value;
if (cpass === "") {
    sp2.innerHTML = "Confirm password is required";
    return false;
} else if (cpass !== pass) {
    sp2.innerHTML = "Password and Confirm password should match";
    err2.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`;
    f1.cpass.value = "";
    f1.cpass.focus();
    return false;
} else {
    err2.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`;
    sp2.innerHTML = "";
}

  // Mobile number validation
  let pattern1 = /^([7-9][0-9]{9})$/;
  let mno = f1.mno.value;
  if (mno === "") {
      spno.innerHTML = "Mobile number is required";
      return false;
  } else if (!mno.match(pattern1)) {
      spno.innerHTML = "Mobile number is invalid...please try again";
      errno.innerHTML = `<img src='wrong.jpg' height='30px' width='30px'>`;
      f1.mno.value = "";
      f1.mno.focus();
      return false;
  } else {
      errno.innerHTML = `<img src='correct1.jpeg' height='30px' width='30px'>`;
      spno.innerHTML = "";
  }







let c=0
{ 
    let uname=f1.uname.value
    let pass=f1.pass.value
  //  let cpass=f1.cpass.value
    localStorage.setItem("name", uname);
    localStorage.setItem("password", pass);
   // localStorage.setItem(`cpassword${c}`,cpass)
    c++

   
}


alert("register successfully")
return true;





}



