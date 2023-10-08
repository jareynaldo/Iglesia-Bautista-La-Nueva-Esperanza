// Define the reusable carousel function
function createCarousel(containerSelector) {
    const container = document.querySelector(containerSelector);
    const prevBtn = container.querySelector('#prevBtn');
    const nextBtn = container.querySelector('#nextBtn');
    const slides = container.querySelectorAll('.carousel-slide');
    console.log('Container:', container);

    let currentIndex = 0;
  
    function showSlide(index) {
      container.querySelector('.carousel-container').style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    
    setInterval(nextSlide, 3000);

  }
  
const containersArr = document.querySelectorAll('.carousel');

for(let i = 0; i < containersArr.length ; i++){
    createCarousel('.carousel:nth-child(' + (i + 1) + ')');
}