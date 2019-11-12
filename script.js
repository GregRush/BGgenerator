var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");


// console.log(css)
// console.log(color1)
// console.log(color2)



// LONG VERSION WITH CONSOLE TEST
// color1.addEventListener("input", function(){
//     // console.log(color1.value);
//     // body.style.background =  "Linear-gradient(to right, " 
//     // + color1.value 
//     // + "," 
//     // + color2.value +
//     //  ")";
// colorPick()
// })

// color2.addEventListener("input", function(){
// colorPick()

//     // console.log(color2.value);
//     // body.style.background =  "Linear-gradient(to right, " 
//     // + color1.value 
//     // + "," 
//     // + color2.value +
//     //  ")";
    
// })

// CODE REFACTORING WITH FUNCTIONS
// ADD ONS
css.textContent = body.style.background + ";";

function colorPick() {
    body.style.background =  
    "Linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value +
     ")";
     css.textContent = body.style.background + ";";
}


function random_rgba() { 
    return '#' + Math.random().toString(16).slice(2, 8)

}


function randomColors() {
    randomColor1 = random_rgba();
    randomColor2 = random_rgba();
    color1.value = randomColor1;
    color2.value = randomColor2;
    colorPick()
    }

color1.addEventListener("input", colorPick);
color2.addEventListener("input", colorPick);
btn.addEventListener("click", randomColors);

// FUNCTIONS THAT GENERATE A RANDOM RGB:
// function random_rgba() {
//     var o = Math.round, r = Math.random, s = 255;
//     return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
   
// }
// var color = random_rgba();

// '#' + (function co(lor){   return (lor +=
//     [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
//     && (lor.length == 6) ?  lor : co(lor); })('');

//     (function(m,s,c){return (c ? arguments.callee(m,s,c-1) : '#') +
//   s[m.floor(m.random() * s.length)]})(Math,'0123456789ABCDEF',5)

  
// 2
// '#'+'0123456789abcdef'.split('').map(function(v,i,a){
//   return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

//   '#'+Math.floor(Math.random()*16777215).toString(16);
