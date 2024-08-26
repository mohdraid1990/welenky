document.addEventListener('DOMContentLoaded', () => {
    const smallImages = document.querySelectorAll('.small-img');
    const largeImage = document.getElementById('large-img');
  
    smallImages.forEach((img) => {
      img.addEventListener('click', () => {
        largeImage.classList.add('fade-out');
        setTimeout(() => {
          largeImage.src = img.getAttribute('data-large');
          largeImage.onload = () => {
            largeImage.classList.remove('fade-out');
            largeImage.classList.add('fade-in');
            setTimeout(() => {
              largeImage.classList.remove('fade-in');
            }, 500);
          };
        }, 500);
      });
    });
  });
  
  let slideIndex = 0;
const slidesContainer = document.querySelector('.cards');
const slides = document.querySelectorAll('.cards .card');
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth + 32; // عرض البطاقة مع الفجوة

// نسخ البطاقة الأولى والأخيرة لإنشاء تأثير التكرار اللانهائي بدون فجوة
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slides[0]);

function showSlides(n) {
    slidesContainer.style.transition = "transform 0.5s ease";
    slidesContainer.style.transform = `translateX(-${(n + 1) * slideWidth}px)`;

    slideIndex = n;

    if (n >= totalSlides) {
        setTimeout(() => {
            slidesContainer.style.transition = "none";
            slidesContainer.style.transform = `translateX(-${slideWidth}px)`;
            slideIndex = 0;
        }, 500); 
    }

    if (n < 0) {
        setTimeout(() => {
            slidesContainer.style.transition = "none";
            slidesContainer.style.transform = `translateX(-${totalSlides * slideWidth}px)`;
            slideIndex = totalSlides - 1;
        }, 500);
    }
}

function autoSlide() {
    showSlides(slideIndex += 1);
    setTimeout(autoSlide, 4000);
}

slidesContainer.style.transform = `translateX(-${slideWidth}px)`;

autoSlide();
