// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle scroll effects
    window.addEventListener('scroll', function() {
        // Change navbar background on scroll
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
    
        updateActiveNavLink();
    });
    

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; 
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Function to update active navigation link
function updateActiveNavLink() {
    const sections = ['home', 'about', 'shop', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current link
                const currentLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            }
        }
    });
}

// Contact form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = {};
    
    // Convert FormData to regular object
    for (let [key, value] of formData.entries()) {
        if (data[key]) {
            // Handle multiple values (like checkboxes)
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    }
    
    // Simple form validation
    if (!data.name || !data.email || !data.phone || !data.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    alert('Thank you for your message! We will get back to you soon.');
    
    // Form Reset
    event.target.reset();
    
}

// Smooth scrolling for older browsers
if (!CSS.supports('scroll-behavior', 'smooth')) {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}