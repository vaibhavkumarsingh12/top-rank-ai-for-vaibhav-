// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Add retro hover effect to tool cards
    const toolCards = document.querySelectorAll('.tool');
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add a subtle "glow" effect
            this.style.boxShadow = '0 0 15px #0f0';
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset to original style (defined in CSS)
            this.style.boxShadow = '5px 5px 0 #0f0';
        });
    });

    // Add a "typing" effect to the intro paragraph
    const introParagraph = document.querySelector('#intro p');
    if (introParagraph) {
        const originalText = introParagraph.textContent;
        introParagraph.textContent = '';
        
        let i = 0;
        const typingSpeed = 30; // milliseconds per character
        
        function typeWriter() {
            if (i < originalText.length) {
                introParagraph.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        // Start the typing effect
        typeWriter();
    }

    // Add a "back to top" button that appears when scrolling down
    const body = document.querySelector('body');
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '20px';
    backToTopBtn.style.right = '20px';
    backToTopBtn.style.display = 'none';
    backToTopBtn.style.backgroundColor = '#222';
    backToTopBtn.style.color = '#0f0';
    backToTopBtn.style.border = '2px solid #0f0';
    backToTopBtn.style.borderRadius = '0';
    backToTopBtn.style.padding = '10px 15px';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.fontFamily = "'Press Start 2P', cursive";
    backToTopBtn.style.fontSize = '16px';
    backToTopBtn.style.zIndex = '1000';
    
    body.appendChild(backToTopBtn);
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide the back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Add a simple "CRT turn on" effect when the page loads
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#000';
    overlay.style.zIndex = '9999';
    overlay.style.transition = 'opacity 1.5s ease';
    
    body.appendChild(overlay);
    
    // Simulate CRT monitor turning on
    setTimeout(function() {
        overlay.style.opacity = '0';
        
        // Remove the overlay after the transition
        setTimeout(function() {
            overlay.remove();
        }, 1500);
    }, 500);
});
