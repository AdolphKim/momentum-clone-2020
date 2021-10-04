const img = [
    "img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg"
]

const backImg = document.createElement("img");
const randImg = img[Math.floor(Math.random()*img.length)];

backImg.src = randImg;
document.body.appendChild(backImg);