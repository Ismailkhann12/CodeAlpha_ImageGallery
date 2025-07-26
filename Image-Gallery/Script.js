let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showdata");
    console.log(ul);

    if(ul.className == "showdata"){
        document.getElementById("bar").className = "fa-solid fa-xmark";
    }
    else{
        document.getElementById("bar").className = "fa-solid fa-bars";
}
})









let images = Array.from(document.querySelectorAll('.Image img '));

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightbox').style.display = 'block';
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(n) {
  currentIndex += n;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterImages(category) {
  images.forEach(img => {
    if (category === 'all' || img.classList.contains('Image-' + category)) {
      img.style.display = '';
    }
    else {
      img.style.display = 'none';
    }
  });
}
