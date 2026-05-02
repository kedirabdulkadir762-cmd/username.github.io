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
document.querySelectorAll(".payment-card").forEach(card => {

card.addEventListener("click", function(){

alert("Please send payment and confirm to access course materials.");

});

});
var message = "";

if(score == 5){
message = "Excellent! 🎉";
}
else if(score >=3){
message = "Good job 👍";
}
else{
message = "Keep practicing 💪";
}

document.getElementById("score").innerHTML =
"Your Score: " + score + " / 5 <br>" + message;
