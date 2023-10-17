const colors =['green','red','purple','yellow','white','brown','pink','orange','aqua']
const body =document.querySelector("body")
const button =document.querySelector("button")
button.addEventListener("click",function(){
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    button.textContent=colors[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}