let handler = document.querySelector(".joystick .handler")

handler.addEventListener("dragStart" , function(e){
    e.preventDefault()
    handler.parentElement.style.backgroundColor = "#000"
})


const moveElm = document.querySelector(".joystick .handler");
var X;
var Y;
var mouse_down = false;

window.addEventListener("mousemove",function(e){

X = e.x;
Y = e.y;

if(mouse_down){
moveElm.style.cssText = "left:" (X-75) "px";
moveElm.style.cssText = "top:" (Y-75) "px";
}
});

moveElm.addEventListener("mousedown",function(e){

mouse_down = true;

moveElm.style.cssText = "left:" (X-75) "px";
moveElm.style.cssText = "top:" (Y-75) "px";


});
moveElm.addEventListener("mouseup",function(){

mouse_down = false;
});