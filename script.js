function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:'smooth'
})

}

function changeLanguage(lang){

if(lang=="or"){

document.querySelector(".site-name").innerText="Abdulkadir Math Academy"

}

else if(lang=="am"){

document.querySelector(".site-name").innerText="Abdulkadir Math Academy"

}

else{

document.querySelector(".site-name").innerText="Abdulkadir Math Academy"

}

}
document.querySelector(".register-form").addEventListener("submit",function(e){

e.preventDefault();

alert("Registration Successful! Please proceed to payment.");

scrollToSection("payment");

});
