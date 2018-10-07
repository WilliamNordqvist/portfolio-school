var hamburger = document.getElementById("hamburger");
var burgerNav = document.querySelectorAll(".burgerNav");


// toggle hamburger option visebility 

    hamburger.addEventListener("click", function(){
        for(var i = 0; i < burgerNav.length; i++){
            if(burgerNav[i].style.display === "none"){
                burgerNav[i].style.display = "block";  
            } else {
                burgerNav[i].style.display = "none";
            } 
        }
    });