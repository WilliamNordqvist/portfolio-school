var hamburger = document.getElementById("hamburger") ;
var burgerNav = document.querySelectorAll(".burgerNav");
var hamburgerOptions = document.getElementById('hamburgerOptions');


// toggle hamburger option visebility

hamburger.addEventListener("click",function(){
    if(hamburgerOptions.style.display === 'none'){
        hamburgerOptions.style.display = 'block'
       } else {
           hamburgerOptions.style.display = 'none'
       }});


    // skill bar js

   
    window.onscroll = function(){
    var test = document.querySelector("#skillcontainer")
    .getBoundingClientRect().top;
    var arrey = [".php", ".css", ".htm",".javascript",".ux",".sql"];
    var checkclass = document.getElementById("check");

    if(test < 380 && checkclass.classList.contains('sql')){
        arrey.forEach(function(x){
            var i = document.querySelector(x);
            var c = x.replace ("."," ")
            c = c+"1";
            i.className = c 
   })      
  }
};

// Scroll funktion 

document.querySelectorAll(".toBottom").forEach(function(x){
    x.addEventListener('click',function(){
    document.getElementById("footer-bottom").scrollIntoView({ behavior: 'smooth',block: "end",inline: "start" 
})
    hamburgerOptions.style.display = 'none';
    })  
});

document.querySelectorAll(".toPortfolio").forEach(function(x){
    x.addEventListener('click',function(){
     document.querySelector(".portfolio").scrollIntoView({behavior: 'smooth',block: "start", inline: "start"
    })
    hamburgerOptions.style.display = 'none';
    })
});

document.querySelectorAll(".toSkills").forEach(function(x){
    x.addEventListener('click',function(){
    document.querySelector('#skillcontainer').scrollIntoView({behavior: 'smooth',block: "start", inline: "start" 
    })
    hamburgerOptions.style.display = 'none';
    })
});


