function generateKey(){

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let key="PT-";

for(let i=0;i<32;i++){

key+=chars.charAt(Math.floor(Math.random()*chars.length));

}

document.getElementById("apikey").value=key;

}

function copyKey(){

const input=document.getElementById("apikey");

if(input.value==""){

alert("Generate API Key dulu!");

return;

}

navigator.clipboard.writeText(input.value);

alert("API Key berhasil disalin!");

}

function scrollToApi(){

document.getElementById("api").scrollIntoView({

behavior:"smooth"

});

}

const mode=document.getElementById("mode");

mode.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

mode.innerHTML="☀️";

}else{

mode.innerHTML="🌙";

}

}
