// Alankar Pokhrel
// 2/25/2019
// Info2220
// Jon Holmes
// Assignment 6
// Purpose:THis is a script to be used in  events.html. This performs actions with button pressing.
function moveMouse(e){
    var e=e || window.event;
    var x=e.x;
    var y=e.y;
    document.getElementById("mouseCoords").innerHTML="x: "+x+" y: "+y;
}
function mousePressed(e){
    var e=e || window.event;
    if(e.target !== e.currentTarget){
        e.target.className="pressed";
    }
}
function resetClass(e){
    var e=e || window.event;
    e.target.className="";
}
function mouseHeadOver(e){
    var e=e || window.event;
    e.target.className="overHead";
}
window.onload= function(){
    var sec=window.document.getElementById("secMouser")
    sec.addEventListener("mousemove",moveMouse);
    sec.addEventListener("mousedown",mousePressed);
    sec.addEventListener("mouseup",resetClass);
    
    var h1=window.document.getElementsByTagName("h1");
    for(var i=0; i<h1.length;i++){
        h1[i].addEventListener("mouseover",mouseHeadOver);
        h1[i].addEventListener("mouseout",resetClass);
    }

    var btn=window.document.getElementById("btnSayHello");
    btn.addEventListener("click", function() {
        alert("Hello User!");
    });
    btn.addEventListener("mousemove", function(e){
        var e=e || window.event;
        e.stopPropagation();
        e.cancelBubble=true;
        window.document.getElementById("mouseCoords").innerText="Mouse is over the button."
    });
}
