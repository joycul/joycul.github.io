const plusImg = document.createElement("img");

const img = ["0.jpeg", "1.jpeg", "2.jpeg"];

const selectImg = img[Math.floor(Math.random() * img.length)];

plusImg.src = `img/${selectImg}`;

document.body.appendChild(plusImg);

