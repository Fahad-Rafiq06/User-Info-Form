const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());


function sub(){

    var name = document.getElementById("name").value.toUpperCase();

    var name1 = document.getElementById("name1");

    name1.innerText = name + "\n" ;

    

    var fName = document.getElementById("fName").value.toUpperCase();

    var fName1 = document.getElementById("fName1");

    fName1.innerText = fName + "\n";

    var number= document.getElementById("number").value.toUpperCase();

    var number1 = document.getElementById("number1");

    number1.innerText = number  + "\n";

    var dob = document.getElementById("dob").value.toUpperCase();

    var dob1 = document.getElementById("dob1");

    dob1.innerText = dob + "\n";
}








// function sub(){
//     // var a = prompt("value");

//    var name = document.getElementById("name").value;

//    var b = document.getElementById("email1");

//    b.innerText = name;
//     // var fName = document.getElementById("fName").value;
    
//     // var  email = document.getElementById("email").value;
    
//     // var  pass = document.getElementById("pass").value;
    
//     // var  pass = document.getElementById("pass").value;
    
//     // var  phone = document.getElementById("phone").value;
    
//     // document.getElementById("email1").innerHTML = name

//     // var name = name1;

//     // console.log(a)

// }

