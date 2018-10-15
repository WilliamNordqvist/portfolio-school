var hamburger = document.getElementById("hamburger");
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

    var php = function(){
        document.querySelector(".php").className = "php1";
    };
    var css = function(){
        document.querySelector(".css").className = "css1";
    };
    var htm = function(){
    document.querySelector(".htm").className = "htm1";	
    };
    var jav = function(){
    document.querySelector(".javascript").className = "javascript1";	
    };
    var ux = function(){
        document.querySelector(".ux").className = "ux1";	
    };
    var sql = function(){
        document.querySelector(".sql").classList = "sql1";	
    };    


var checkclass = document.getElementById("check");

        
window.onscroll = function(){
    var test = document.querySelector("#skillcontainer").getBoundingClientRect().top
    console.log(test);
    if(test < 450 && checkclass.classList.contains('sql')){
        console.log('funkar')
        setTimeout(css,1000);
        setTimeout(htm,1000);
        setTimeout(jav,1000);
        setTimeout(php,1000);
        setTimeout(ux,1000);
        setTimeout(sql,1000);
    }      
};


// button to click
var toBottom = document.getElementById("toBottom");
var toPortfolio = document.getElementById("toPortfolio");
var toSkills = document.getElementById("toSkills");
// Where to go
var footer = document.getElementById("footer-bottom");
var barstarts = document.getElementById("barstarts");
var port =  document.querySelector(".portfolio");


toBottom.addEventListener('click',function(){
    footer.scrollIntoView({ behavior: 'smooth',block: "end", inline: "start" });
    hamburgerOptions.style.display = 'none';
});
toPortfolio.addEventListener('click',function(){
    port.scrollIntoView({behavior: 'smooth',block: "start", inline: "end"});
    hamburgerOptions.style.display = 'none';
});
toSkills.addEventListener('click',function(){
    barstarts.scrollIntoView({behavior: 'smooth',block: "center", inline: "start" });
    hamburgerOptions.style.display = 'none';
});

