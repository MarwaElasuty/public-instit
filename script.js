

function appear() {
    document.querySelector(".ul-list").classList.toggle("display");
   }

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
