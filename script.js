

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
const autoplayInterval = 4000; 
const animationDuration = 1000; // Adjust this value for desired animation speed (in milliseconds)

function showSlide(index) {
  setTimeout(() => {
    overlay.style.left = '100%';
    setTimeout(() => {
      sliderImages.style.transform = `translateX(${-index * imageWidth}px)`;
      sliderImages.style.transition = `transform ${animationDuration}ms ease-in-out`; // Set transition for smooth animation
 
     overlay.style.left = '-100%';
    }, 900);
  }, 0);
}

function autoplay() {
  currentIndex = (currentIndex + 1) % totalImages;
  showSlide(currentIndex);
}

// Start the automatic slider with an initial delay
let autoplayTimeout = setTimeout(autoplay, autoplayInterval);

// Pause autoplay on hover (optional)
sliderImages.addEventListener('mouseover', () => {
  clearTimeout(autoplayTimeout);
});

// Resume autoplay on mouseout (optional)
sliderImages.addEventListener('mouseout', () => {
  autoplayTimeout = setTimeout(autoplay, autoplayInterval);
});

nextButton.addEventListener('click', () => {
  clearTimeout(autoplayTimeout); // Pause autoplay on manual click
  currentIndex = (currentIndex + 1) % totalImages;
  showSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
  clearTimeout(autoplayTimeout); // Pause autoplay on manual click
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showSlide(currentIndex);
});



const clickedServicesBtn = document.getElementById("all-services");
const displayedServices = document.getElementById("appeared-div");

clickedServicesBtn.addEventListener("click", function(){
    console.log("displayed");
    displayedServices.style.display = "block";
})



// test slider 


const slider = document.querySelector('.slider');
 images = ['sero.jpg', 'place3.jpg', 'place2.jpg']; // Array of image paths

for (let image of images) {
  const imageDiv = document.createElement('div');
  const imageElement = document.createElement('img');
  imageElement.src = image;
  imageDiv.appendChild(imageElement);
  slider.appendChild(imageDiv);
}


 slider = document.querySelector('.slider'); // Get the slider element
 nextButton = document.querySelector('.next'); // Get the 'next' button

nextButton.addEventListener('click', () => {
  const descriptions = slider.querySelectorAll('.slider-description');
  descriptions.forEach(description => {
    description.style.animation = 'none'; // Reset animation styles
    setTimeout(() => {
      description.style.animation = 'fadeInRight 2.5s ease-in-out'; // Re-apply animation
    }, 100); // Delay to avoid immediate animation conflict (optional)
  });
});

