var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1);

var image1 = "./images/dice"+randomNumber1+".png";
var image2 = "./images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").textContent = "Player One Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Player Two Wins!";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}
        