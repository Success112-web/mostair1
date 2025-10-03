document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons that toggle details
    const detailToggles = document.querySelectorAll('.toggle-details');

    detailToggles.forEach(button => {
        button.addEventListener('click', (event) => {
            // Find the parent service-card
            const card = event.target.closest('.service-card');
            
            // Find the details div within that card
            const detailsDiv = card.querySelector('.details');
            
            // Toggle the 'visible' class
            if (detailsDiv.classList.contains('visible')) {
                // Hide details
                detailsDiv.classList.remove('visible');
                event.target.textContent = 'View Details';
            } else {
                // Show details
                detailsDiv.classList.add('visible');
                event.target.textContent = 'Hide Details';

                // Optional: Close all other open details for better UX
document.querySelectorAll('.details.visible').forEach(openDetails => {
                    if (openDetails !== detailsDiv) {
                        openDetails.classList.remove('visible');
                        // Reset the button text for the other one
                        openDetails.closest('.service-card').querySelector('.toggle-details').textContent = 'View Details';
                    }
                });
            }
        });
    });
});