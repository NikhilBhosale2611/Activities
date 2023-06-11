console.log("JS Activity");

const mail = document.getElementById("mailid");
const pass = document.getElementById("pass");
const msg1 = document.getElementById("message1");
const msg2 = document.getElementById("message2");

let hemail = "nik@bhosale.com";
let hpass = "asdf123";

// console.log(mail);
// console.log(pass);

mail.addEventListener(
    "blur",
    function(){
        console.log("Email Tasting");
        let reg = /^([0-9a-zA-Z]+)@([0-9a-zA-Z]+)\.([a-zA-Z]){2,10}$/;
        let str = mail.value;
        console.log(reg,str);
        if (  hemail != str) {
            
            msg1.textContent = "email id is not match";
            mail.style.borderColor = "red";
            msg1.style.color = "red";
        }
        else if(reg.test(str)){
            console.log("Email Valid");
        }
        else{
            console.log("Invalid");
            msg1.textContent = "email id is invalid";
            mail.style.borderColor = "red";
            msg1.style.color = "red";
        }


    }
);

pass.addEventListener(
    "blur",
    function(){
        console.log("Pass blurred");
        let reg = /^([a-zA-Z0-9!@#$%^&*]){6,10}$/;
        let str = pass.value;
        console.log(reg,str);
        if (reg.test(str) && hpass == str) {
            console.log("password Valid");
        }
        else{
            console.log("Invalid");
            msg2.textContent = "Password is invalid";
            pass.style.borderColor = "red";
            msg2.style.color = "red";
        }


    }
);

// ----------------------------------------------------------------------------



