var form = document.forms[0]
var table = document.getElementsByTagName("table")[0];
var Name = document.getElementById("name")
var age = document.getElementById("age")
var email = document.getElementById("email")

function drawRaw(n,a,e){
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.textContent = n;
    td2.textContent = a;
    td3.textContent = e;
    tr.append(td1, td2, td3);
    table.appendChild(tr);
}



form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    let nameVal = Name.value;
    let ageVal = age.value;
    let emailVal = email.value;
  
        drawRaw(nameVal, ageVal, emailVal);
        console.log("Done");
        Name.value = "";
        age.value = "";
        email.value = "";
    
    
})