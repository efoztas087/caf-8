// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Menu Tabs Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const menuTabs = document.querySelectorAll('.menu-tab');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and tabs
        tabBtns.forEach(b => b.classList.remove('active'));
        menuTabs.forEach(tab => tab.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding tab
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize EmailJS
(function() {
    emailjs.init("zB-yMHoPbHKZ4M2BF"); // Vervang met je EmailJS public key
})();

// Form submission handling with EmailJS
const contactForm = document.getElementById('reservationForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const phone = this.querySelector('input[name="phone"]').value;
        const date = this.querySelector('input[name="date"]').value;
        const time = this.querySelector('input[name="time"]').value;
        const guests = this.querySelector('input[name="guests"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        // Simple validation
        if (!name || !email || !date || !time || !guests) {
            alert('Vul alle verplichte velden in.');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Versturen...';
        submitBtn.disabled = true;
        
        // Prepare email template parameters
        const templateParams = {
            to_name: name,
            to_email: email,
            from_name: "Café 8",
            from_email: "info@cafe8.nl",
            reservation_date: date,
            reservation_time: time,
            number_of_guests: guests,
            phone_number: phone,
            special_requests: message || "Geen speciale wensen",
            reply_to: email
        };
        
        // Send email to Café 8 (notification)
        emailjs.send('service_e62dtlm', 'template_ugll2yu', templateParams)
            .then(function(response) {
                console.log('Email naar Café 8 verstuurd!', response.status, response.text);
                
                // Send confirmation email to customer
                const customerTemplateParams = {
                    to_name: name,
                    to_email: email,
                    reservation_date: date,
                    reservation_time: time,
                    number_of_guests: guests,
                    special_requests: message || "Geen speciale wensen"
                };
                
                // Send confirmation email to customer
                return emailjs.send('service_e62dtlm', 'template_liyqa0g', customerTemplateParams);
            })
            .then(function(response) {
                console.log('Customer confirmation sent!', response.status, response.text);
                alert(`Bedankt voor je reservering, ${name}! We hebben je reservering ontvangen voor ${date} om ${time} voor ${guests} personen. Je ontvangt binnenkort een bevestigingsmail.`);
                
                // Reset form
                contactForm.reset();
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                alert('Er is een fout opgetreden bij het versturen van je reservering. Probeer het later opnieuw of neem telefonisch contact met ons op.');
            })
            .finally(function() {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .menu-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation to menu items
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// Add hover effects to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-placeholder');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Add counter animation for prices (optional)
function animateCounter(element, target, duration = 1000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = '€' + start.toFixed(2);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = '€' + target.toFixed(2);
        }
    }
    updateCounter();
}

// Initialize price animations when menu section is visible
const menuSection = document.querySelector('.menu-section');
if (menuSection) {
    const menuObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const prices = entry.target.querySelectorAll('.price');
                prices.forEach(price => {
                    const priceText = price.textContent.replace('€', '');
                    const priceValue = parseFloat(priceText);
                    if (!isNaN(priceValue)) {
                        animateCounter(price, priceValue);
                    }
                });
                menuObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    menuObserver.observe(menuSection);
}

// Add smooth reveal animation for sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

// Add click-to-copy functionality for contact information
const contactItems = document.querySelectorAll('.contact-item p');
contactItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        const text = item.textContent;
        navigator.clipboard.writeText(text).then(() => {
            // Show temporary tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Gekopieerd!';
            tooltip.style.cssText = `
                position: absolute;
                background: #8B4513;
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
            `;
            document.body.appendChild(tooltip);
            
            const rect = item.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - 30) + 'px';
            
            setTimeout(() => {
                document.body.removeChild(tooltip);
            }, 2000);
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could be used for menu navigation
            console.log('Swiped left');
        } else {
            // Swipe right - could be used for menu navigation
            console.log('Swiped right');
        }
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Navbar background change logic
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Email section
// Initialiseer EmailJS
emailjs.init("zB-yMHoPbHKZ4M2BF");

window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    let statusDiv = document.getElementById('reservationStatus');
    if (!statusDiv) {
        statusDiv = document.createElement('div');
        statusDiv.id = 'reservationStatus';
        statusDiv.style.marginTop = '15px';
        form.parentElement.appendChild(statusDiv);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const time = form.time.value;
        const guests = form.guests.value;
        const message = form.message.value;

        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time,
            guests: guests,
            message: message
        };

        emailjs.send('service_e62dtlm', 'template_ugll2yu', templateParams)
            .then(function(response) {
                statusDiv.innerHTML = '<div style="color:green;">✅ Reservering ontvangen! Je ontvangt een bevestigingsmail.</div>';
                form.reset();
            }, function(error) {
                statusDiv.innerHTML = '<div style="color:red;">❌ Er ging iets mis met het versturen van de bevestiging. Probeer opnieuw.</div>';
            });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const fadeEls = document.querySelectorAll('.fade-in');
    function showOnScroll() {
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', showOnScroll);
    showOnScroll();
});
