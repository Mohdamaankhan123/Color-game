var numsquares = 6
var colors = generateRandomColors(numsquares)
var messageDisplay = document.querySelector("#messagedisplay")
var squares = document.querySelectorAll(".square")
var h1 = document.querySelector("h1")
var resetbutton = document.querySelector("#reset")
var easybtn = document.querySelector("#easybtn")
var hardbtn = document.querySelector("#hardbtn")

easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected")
    easybtn.classList.add("selected")
    numsquares = 3
    colors = generateRandomColors(numsquares)
    pickedColor=pickcolor(colors)
    colorDisplay.textContent = pickedColor
    for(var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none"
        }
    }
    h1.style.background="steelblue"
})

hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected")
    hardbtn.classList.add("selected")
    numsquares = 6
    colors = generateRandomColors(numsquares)
    pickedColor=pickcolor(colors)
    colorDisplay.textContent = pickedColor
    for(var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block"
        }
    }
    h1.style.background="steelblue"
})

resetbutton.addEventListener("click",function(){
    colors = generateRandomColors(numsquares)
    pickedColor = pickcolor(colors)
    for(var i =0;i<squares.length;i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background="steelblue"
    colorDisplay.textContent = pickedColor
    messageDisplay.textContent = ""
    this.textContent = "New Colors"
})


for(var i =0;i<squares.length;i++){
    squares[i].style.background = colors[i];
   
    squares[i].addEventListener("click",function()
    {
    var clickedcolor= (this.style.background)
    if(clickedcolor===pickedColor)
        {
            messageDisplay.textContent = "Correct"
            changecolor(clickedcolor)
            h1.style.background=clickedcolor
            resetbutton.textContent = "Play Again?"
        }
    else
    {
        this.style.background='#232323'
        messageDisplay.textContent = "Try Again"
    }
})
}
var pickedColor = pickcolor(colors)
var colorDisplay = document.querySelector("#colordisplay")
colorDisplay.textContent = pickedColor
function changecolor(color)
{
    for(var i =0;i<squares.length;i++){
        squares[i].style.background = color;
    }

}
function pickcolor(colors){
   return colors[ Math.floor(Math.random() * colors.length)]
  
}
function generateRandomColors(num){
    var arr = []
    for(var i =0;i<num;i++)
{
arr.push(randomColor())

}
return arr
}

function randomColor(){
   var r= Math.floor(Math.random()*256)
   var g= Math.floor(Math.random()*256)
   var b= Math.floor(Math.random()*256)

   return "rgb(" + r + ", " + g + ", " + b + ")";

}