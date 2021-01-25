
let buttonObject=document.getElementById("button");
let username=document.getElementById("userName");
let applicationName=document.getElementById("applicationName");

buttonObject.disabled=true;


if(username.value.length === "") username.addEventListener("change", disbutton);
if(applicationName.value === "") applicationName.addEventListener("input",disbutton());

function disbutton() {
    if (username.value.length === ""){
        buttonObject.disabled = true;
    } else {
        buttonObject.disabled = false;
    }
}


