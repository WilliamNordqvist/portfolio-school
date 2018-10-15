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




var skillbar = document.getElementById('skillcontainer');
var checkclass = document.getElementById("check");

window.onscroll = function() {myFunction()};
function myFunction() {
    if (checkclass.classList.contains('sql') && document.documentElement.scrollTop > 800) {
        // setTimeout(css,2000);
        // setTimeout(htm,2000);
        // setTimeout(jav,2000);
        // setTimeout(php,2000);
        // setTimeout(ux,2000);
        // setTimeout(sql,2000);
        // console.log(document.documentElement.scrollTop);
        // return;
        }
        
}


// button to click
var toBottom = document.getElementById("toBottom");
var toPortfolio = document.getElementById("toPortfolio");
var toSkills = document.getElementById("toSkills");
// Where to go
var footer = document.getElementById("footer-bottom");
var barstarts = document.getElementById("barstarts");
var port =  document.getElementById("portH1");
// scrollHight var
// var i = footer.offsetTop;
// var u = barstarts.offsetTop;
// var p = port.offsetTop;

toBottom.addEventListener('click',function(){
    footer.scrollIntoView({ behavior: 'smooth' });
    hamburgerOptions.style.display = 'none';
});
toPortfolio.addEventListener('click',function(){
    port.scrollIntoView({ behavior: 'smooth' });
    hamburgerOptions.style.display = 'none';
});
toSkills.addEventListener('click',function(){
    barstarts.scrollIntoView({ behavior: 'smooth' });
    hamburgerOptions.style.display = 'none';
    if(checkclass.classList.contains('sql')){
        setTimeout(css,2000);
        setTimeout(htm,2000);
        setTimeout(jav,2000);
        setTimeout(php,2000);
        setTimeout(ux,2000);
        setTimeout(sql,2000);
        return;
    }
});

