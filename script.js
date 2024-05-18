

function appear() {
    document.querySelector(".ul-list").classList.toggle("display");
}


// SERVICES TABS 
const tabs = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tab-panel');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active')); // Remove active from all tabs
        tabPanels.forEach(p => p.classList.remove('active')); // Hide all content panels

        tab.classList.add('active'); // Add active class to clicked tab

        // Transition before showing active content panel
        tabPanels[index].classList.add('active'); // Initiate transition for new panel
        setTimeout(() => {
            // Remove transition after animation duration to prevent flickering
            tabPanels[index].style.transition = 'none';
        }, 300); // Adjust timeout to match transition duration (0.3s in CSS)
    });
});


// SLIDER

const sliderImages = document.querySelector('.slider-images');
const images = document.querySelectorAll('.slider-images img'); 
const overlay = document.querySelector('.overlay');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalImages = images.length;
const imageWidth = 1350; 

function showSlide(index) {
  overlay.style.left = '0';
  setTimeout(() => {
    overlay.style.left = '100%';
    setTimeout(() => {
      sliderImages.style.transform = `translateX(${-index * imageWidth}px)`; 
      setTimeout(() => {
        overlay.style.left = '-100%';
      }, 700); 
    }, 600); 
  }, 0);
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showSlide(currentIndex);
});