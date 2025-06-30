let button = document.getElementById("generateBtn");
let container = document.getElementById("imageContainer");

button.addEventListener("click", () => {
  let img = document.createElement('img');

  let x = Math.floor(Math.random() * 90);
  let y = Math.floor(Math.random() * 90);
  let rotates = Math.floor(Math.random() * 360);

  img.setAttribute('src', 'https://picsum.photos/200?random=' + Math.floor(Math.random() * 1000));

  img.style.height = '200px';
  img.style.width = '200px';
  img.style.position = 'absolute';
  img.style.top = x + '%';
  img.style.left = y + '%';
  img.style.transform = 'rotate(' + rotates + 'deg)';
  img.style.opacity = "0"; 

  container.appendChild(img);

  
  setTimeout(() => {
    img.style.opacity = "1";
  }, 100);
});

 