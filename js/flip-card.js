document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.menu-card-container');

    containers.forEach(container => {
        const card = container.querySelector('.menu-card');

        // Mouse tracking tilt effect
        container.addEventListener('mousemove', (e) => {
            if (container.classList.contains('flipped')) return; // disable tilt if flipped
            
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation (max 15 degrees)
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;
            
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Reset rotation on mouse leave
        container.addEventListener('mouseleave', () => {
            if (!container.classList.contains('flipped')) {
                card.style.transform = `rotateX(0deg) rotateY(0deg)`;
            }
        });

        // Flip logic on click
        container.addEventListener('click', () => {
            container.classList.toggle('flipped');
            if (!container.classList.contains('flipped')) {
                // reset tilt instantly when flipping back
                card.style.transform = `rotateX(0deg) rotateY(0deg)`;
            }
        });
    });
});
