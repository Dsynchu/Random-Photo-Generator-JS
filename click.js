let button = document.getElementById("generateBtn");
let container = document.getElementById("imageContainer");

button.addEventListener("click", () => {
  let img = document.createElement('img');

  let x = Math.floor(Math.random() * 80);
  let y = Math.floor(Math.random() * 80);

  img.setAttribute('src', 'https://picsum.photos/200?random=' + Math.floor(Math.random() * 1000));

  img.style.top = x + '%';
  img.style.left = y + '%';
  container.appendChild(img);
});
