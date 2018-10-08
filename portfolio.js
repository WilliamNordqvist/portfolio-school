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
        document.querySelector(".sql").className = "sql1";	
    };

    setTimeout(css,1000);
    setTimeout(htm,1000);
    setTimeout(jav,1000);
    setTimeout(php,1000);
    setTimeout(ux,1000);
    setTimeout(sql,1000);

