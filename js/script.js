var form = document.forms[0]

var Name = document.getElementById("userName")
var pass = document.getElementById("password")


form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    let passval= pass.value;
    let emailVal = Name.value;
    let result=checkInput(passval,emailVal);
    if(result==true){
      window.location="../adara.html"
    }
    else{
      alert("الايميل او الباسورد غير صحيح ")
    }
    
})
function checkInput(p,e){
  let passex=/^[a-zA-Z]{3,15}$/

  let emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let output = false;
  if(passex.test(p)==true && emailExp.test(e)==true){
      output=true;
  } 
  return output;
}