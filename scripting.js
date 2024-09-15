// pehla method
// function Toogle(){
//     var btn = document.getElementById("btn");

//    var Myclass = document.getElementById("Myclass");

//    Myclass.classList.toggle("night")
//     // document.body.classList.toggle("night")

// }

// dusra method
function dayNight(){
var btn2 = document.getElementById("clickBtn");
var bg = document.body;

if(bg.className === 'day'){
    bg.className = 'night';
    btn2.textContent="Day";
    btn2.className='day'
   
   
}
else{
    bg.className = 'day';
     btn2.textContent="Night";
     btn2.className='night'
    
}
}