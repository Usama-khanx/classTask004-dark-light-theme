// pehla method
// function Toogle(){
//     var btn = document.getElementById("btn");

//    var Myclass = document.getElementById("Myclass");

//    Myclass.classList.toggle("night")
//     // document.body.classList.toggle("night")

// }

// dusra method
function dayNight(){
var btn2 = document.getElementById("btn");
var bg = document.body;

if(bg.className === 'night'){
    bg.className = 'day';
   
}
else{
    bg.className = 'night';
    
}
}